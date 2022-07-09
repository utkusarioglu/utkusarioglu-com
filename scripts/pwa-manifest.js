const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const crypto = require("crypto");
const toIco = require("to-ico");
const XmlWriter = require("xml-writer");

function createBufferHash(buffer) {
  const hashSum = crypto.createHash("sha256");
  hashSum.update(buffer);
  return hashSum.digest("hex").substring(0, 10);
}

function createFileHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  return createBufferHash(fileBuffer);
}

function createPath(targetPath) {
  const dir = path.join(process.cwd(), targetPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {
      recursive: true,
      mode: 0o0744,
    });
  }
}

async function writeFavicon(pngPath, iconsTargetPath) {
  const image = fs.readFileSync(pngPath);

  await toIco([image], {
    sizes: [16],
    resize: true,
  }).then((result) => {
    fs.writeFileSync(iconsTargetPath, result);
  });
}

function removePath(targetPath) {
  const dir = path.join(process.cwd(), targetPath);
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function createPngFilename({ svgHash, sizes }) {
  return `logo.${svgHash}.${sizes}.png`;
}

function createSvgFilename({ svgHash }) {
  return `logo.${svgHash}.svg`;
}

function createFaviconFilename({ svgHash }) {
  return `favicon.${svgHash}.ico`;
}

function createManifestFilename({ manifestHash }) {
  return `manifest.${manifestHash}.json`;
}

function createBrowserConfigFilename({ manifestHash }) {
  return `browserconfig.${manifestHash}.xml`;
}

function copySvgIcon({ source, target }) {
  fs.copyFileSync(source, target);
  return target;
}

function createStringHash(opts) {
  return createBufferHash(JSON.stringify(opts));
}

function createManifestObject(
  {
    shortName,
    name,
    startUrl,
    display,
    themeColor,
    backgroundColor,
    description,
    orientation,
  },
  icons,
  buildId
) {
  return {
    id: buildId,
    short_name: shortName,
    name,
    start_url: startUrl,
    display,
    description,
    orientation,
    theme_color: themeColor,
    background_color: backgroundColor,
    icons: Object.values(icons)
      .filter(({ extension }) => extension !== "ico")
      .map(({ sizes, mimeType, href, purpose }) => ({
        sizes,
        type: mimeType,
        src: href,
        purpose,
      })),
  };
}

function writePngIcons(icons) {
  const pngIcons = Object.values(icons.list).filter(
    ({ extension }) => extension === "png"
  );
  return Promise.all(
    pngIcons.map(
      ({ width, filePath }) =>
        new Promise(async (resolve, reject) => {
          return sharp(icons.source)
            .resize(width)
            .png()
            .toFile(filePath)
            .then((info) => {
              resolve(info);
            })
            .catch((error) => {
              reject(error);
            });
        })
    )
  );
}

function createHref(path) {
  return "/_" + path.slice(1);
}

function createProperties(opts) {
  const svgHash = createFileHash(opts.icons.source);
  const manifestHash = createStringHash(opts);
  const iconsTargetFolder = path.join(
    opts.baseFolder,
    opts.icons.iconsSubfolder
  );
  const iconsList = opts.icons.sizes.reduce((prev, curr) => {
    const sizes = `${curr}x${curr}`;
    const fileName = createPngFilename({ svgHash, sizes });
    const filePath = path.join(iconsTargetFolder, fileName);
    prev[sizes] = {
      extension: "png",
      mimeType: "image/png",
      height: curr,
      width: curr,
      filePath,
      href: createHref(filePath),
      fileName,
      sizes,
      rel: "apple-touch-icon",
    };
    return prev;
  }, {});

  const svgFilename = createSvgFilename({ svgHash });
  const svgFilePath = path.join(iconsTargetFolder, svgFilename);
  iconsList["maskable"] = {
    fileName: svgFilename,
    extension: "svg",
    filePath: svgFilePath,
    rel: "mask-icon",
    href: createHref(svgFilePath),
    mimeType: "image/svg+xml",
    purpose: "maskable",
  };

  const faviconFilename = createFaviconFilename({ svgHash });
  const faviconFilePath = path.join(iconsTargetFolder, faviconFilename);
  // const faviconFilePath = path.join(opts.baseFolder, faviconFilename);
  iconsList["favicon"] = {
    fileName: faviconFilename,
    extension: "ico",
    filePath: faviconFilePath,
    href: createHref(faviconFilePath),
    mimeType: "image/x-icon",
    rel: "shortcut icon",
  };

  const manifestObject = createManifestObject(opts, iconsList, manifestHash);
  const manifestFilename = createManifestFilename({ manifestHash });
  const manifestPath = path.join(
    opts.baseFolder,
    opts.manifestSubfolder,
    manifestFilename
  );

  const browserConfigObject = {
    square150x150logoSrc: iconsList["150x150"].href,
    themeColor: opts.backgroundColor,
  };
  const browserConfigFilename = createBrowserConfigFilename({ manifestHash });
  const browserConfigPath = path.join(
    opts.baseFolder,
    opts.browserConfigSubfolder,
    browserConfigFilename
  );

  return {
    manifest: {
      hash: manifestHash,
      object: manifestObject,
      path: manifestPath,
      href: createHref(manifestPath),
      filename: manifestFilename,
      folder: opts.manifestFolder,
    },
    icons: {
      source: opts.icons.source,
      sizes: opts.icons.sizes,
      hash: svgHash,
      list: iconsList,
      folder: iconsTargetFolder,
    },
    browserConfig: {
      hash: manifestHash,
      object: browserConfigObject,
      path: browserConfigPath,
      href: createHref(browserConfigPath),
      filename: browserConfigFilename,
      folder: opts.manifestFolder,
    },
  };
}

function writeManifest(manifest) {
  fs.writeFileSync(manifest.path, JSON.stringify(manifest.object, null, 2));
}

async function writeFiles(props) {
  removePath(props.icons.folder);
  createPath(props.icons.folder);
  copySvgIcon({
    source: props.icons.source,
    target: props.icons.list.maskable.filePath,
  });
  await writePngIcons(props.icons);
  await writeFavicon(
    props.icons.list["128x128"].filePath,
    props.icons.list.favicon.filePath
  );
  writeManifest(props.manifest);
  writeXmlFile(props.browserConfig);
}

function writeXmlFile({ path, object: { square150x150logoSrc, themeColor } }) {
  const ws = fs.createWriteStream(path);
  ws.on("close", () => {
    // console.log(fs.readFileSync(path, "UTF-8"));
  });
  xw = new XmlWriter(false, (string, encoding) => {
    ws.write(string, encoding);
  });

  xw.startDocument()
    .startElement("browserconfig")
    .startElement("msapplication")
    .startElement("tile")
    .startElement("square150x150logo")
    .writeAttribute("src", square150x150logoSrc)
    .endElement()
    .writeElement("TileColor", themeColor)
    .endElement()
    .endElement()
    .endElement();
  ws.end();
}

function addMissingOptions(nextConfig, distDir) {
  if (!nextConfig.manifest.baseFolder) {
    nextConfig.manifest.baseFolder = "./" + distDir;
  }

  if (!nextConfig.manifest.manifestSubfolder) {
    nextConfig.manifest.manifestSubfolder = "static";
  }

  if (!nextConfig.manifest.browserConfigSubfolder) {
    nextConfig.manifest.browserConfigSubfolder = "static";
  }

  if (!nextConfig.manifest.icons.iconsSubfolder) {
    nextConfig.manifest.icons.iconsSubfolder = "static/icons";
  }
  return nextConfig;
}

function checkRequirements(nextConfig) {
  if (!nextConfig.manifest) {
    throw new Error("config.manifest object is needed");
  }
}

module.exports = {
  writeFiles,
  addMissingOptions,
  createProperties,
  checkRequirements,
};
