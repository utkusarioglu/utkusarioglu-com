const puppeteer = require("puppeteer");
const yaml = require("yaml");
const fs = require("node:fs");

const artifactsPath = "/home/pptruser/artifacts";
const baseUrl = "http://www.utkusarioglu.com:3000/resume";

const resumeFile = fs.readFileSync("./assets/resume.yml", "utf-8");
const resume = yaml.parse(resumeFile);

const paperFormatVariants = resume.paperFormats;

const specialtyIdVariants = resume.specialties.map(({ id }) => id);
const includePhotoVariants = resume.includePhoto;

console.log({
  message: "Puppeteer is creating pdfs against following variants",
  specs: {
    includePhotoVariants,
    paperFormatVariants,
    specialtyIdVariants,
  },
});

function createMatrix(specialtyIds, photoVariants, paperFormatVariants) {
  matrix = [];
  paperFormatVariants.forEach((paperFormat) => {
    specialtyIds.forEach((specialtyId) => {
      photoVariants.forEach((includePhoto) => {
        matrix.push({ specialtyId, includePhoto, paperFormat });
      });
    });
  });
  return matrix;
}

async function createSingle(browser, specialtyId, includePhoto, paperFormat) {
  const url = [
    baseUrl,
    [
      `specialty-id=${specialtyId}`,
      `include-photo=${includePhoto.searchQueryValue}`,
      `paper-format=${paperFormat.name}`,
    ].join("&"),
  ].join("?");

  console.log({
    status: "Creating pdf",
    specs: { url, specialtyId, includePhoto, paperFormat },
  });

  const resumeCode = [
    specialtyId,
    includePhoto.shortCode,
    paperFormat.shortCode,
  ].join("");

  const page = await browser.newPage();
  page.setViewport({ width: 1920, height: 1080 });

  await page.goto(url, {
    waitUntil: "networkidle2",
  });

  const resumePath = [
    artifactsPath,
    "raw",
    `resume-${resumeCode}-raw.pdf`,
  ].join("/");

  await page.pdf({
    displayHeaderFooter: false,
    omitBackground: true,
    path: resumePath,
    format: paperFormat.name,
    margin: {
      left: paperFormat.margins.x,
      right: paperFormat.margins.x,
      bottom: paperFormat.margins.y,
      top: paperFormat.margins.y,
    },
  });

  await page.close();
}

(async () => {
  console.log("Starting pdf files creation…");

  const browser = await puppeteer.launch({
    args: [
      // TODO get rid of this
      "--ignore-certificate-errors",
    ],
  });

  const matrix = createMatrix(
    specialtyIdVariants,
    includePhotoVariants,
    paperFormatVariants
  );

  await matrix.reduce((acc, { specialtyId, includePhoto, paperFormat }) => {
    acc = acc.then(() =>
      createSingle(browser, specialtyId, includePhoto, paperFormat)
    );
    return acc;
  }, Promise.resolve());

  await browser.close();
  console.log("Pdf creation complete.");
})();
