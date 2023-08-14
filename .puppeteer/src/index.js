const puppeteer = require("puppeteer");

const artifactsPath = "/home/pptruser/artifacts";
const baseUrl = "http://www.utkusarioglu.com:3000/resume";

const PAPER_FORMAT_VARIANTS = [
  {
    name: "a4",
    shortCode: "4",
    margin: {
      x: 45,
      y: 70,
    },
  },
  {
    name: "letter",
    shortCode: "l",
    margin: {
      x: 40,
      y: 40,
    },
  },
];

const SPECIALTY_VARIANTS = ["fe", "be", "fs", "w3", "al"];

const PHOTO_VARIANTS = [true, false];

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
  console.log({
    status: "Creating pdf",
    specs: { specialtyId, includePhoto, paperFormat },
  });

  const url = [
    baseUrl,
    [
      `specialty-id=${specialtyId}`,
      `include-photo=${includePhoto ? "true" : "false"}`,
      `paper-format=${paperFormat.name}`,
    ].join("&"),
  ].join("?");

  const resumeCode = [
    specialtyId,
    includePhoto ? "p" : "n",
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
      left: paperFormat.margin.x,
      right: paperFormat.margin.x,
      bottom: paperFormat.margin.y,
      top: paperFormat.margin.y,
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
    SPECIALTY_VARIANTS,
    PHOTO_VARIANTS,
    PAPER_FORMAT_VARIANTS
  );

  await matrix.reduce((acc, { specialtyId, includePhoto, paperFormat }) => {
    acc = acc.then(() =>
      createSingle(browser, specialtyId, includePhoto, paperFormat)
    );
    return acc;
  }, Promise.resolve());

  await browser.close();
})();
