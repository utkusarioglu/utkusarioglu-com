const puppeteer = require("puppeteer");

const artifactsPath = "/home/pptruser/artifacts";
const baseUrl = "http://www.utkusarioglu.com:3000/resume";

const PAPER_FORMAT_VARIANTS = [
  {
    format: "a4",
    margin: {
      x: 52,
      y: 70,
    },
  },
  {
    format: "letter",
    margin: {
      x: 40,
      y: 40,
    },
  },
];

const SPECIALTY_VARIANTS = ["fe", "be", "fs", "w3", "al"];

const PHOTO_VARIANTS = [true, false];

function createMatrix(specialtyIds, photoVariants) {
  matrix = [];
  specialtyIds.forEach((specialtyId) => {
    photoVariants.forEach((includePhoto) => {
      matrix.push({ specialtyId, includePhoto });
    });
  });
  return matrix;
}

async function createSingle(specialtyId, includePhoto) {
  const url = [
    baseUrl,
    "?",
    `specialtyId=${specialtyId}`,
    "&",
    `include-photo=${includePhoto ? "true" : "false"}`,
  ].join("");
  const resumeCode = [specialtyId, includePhoto ? "p" : "n"].join("");
  const resumePath = `${artifactsPath}/raw/resume-${format}-${resumeCode}.pdf`;
  const screenshotPath = `${artifactsPath}/screenshots/resume-${resumeCode}.png`;
  console.log({ baseUrl, url, specialtyId, includePhoto, resumeCode });

  await page.goto(url, {
    waitUntil: "networkidle2",
  });
  await page.screenshot({
    path: screenshotPath,
  });

  await PAPER_FORMAT_VARIANTS.reduce(async (chain, { format, margin }) => {
    chain = chain.then(() =>
      page.pdf({
        displayHeaderFooter: false,
        omitBackground: true,
        path: resumePath,
        format,
        margin: {
          left: margin.x,
          right: margin.x,
          bottom: margin.y,
          top: margin.y,
        },
      })
    );
    return chain;
  }, Promise.resolve());
}

(async () => {
  const browser = await puppeteer.launch({
    args: [
      // TODO get rid of this
      "--ignore-certificate-errors",
    ],
  });
  const page = await browser.newPage();
  page.setViewport({ width: 1920, height: 1080 });

  const matrix = createMatrix(SPECIALTY_VARIANTS, PHOTO_VARIANTS);
  await matrix.reduce(({ specialtyId, includePhoto }) => {
    return createSingle(specialtyId, includePhoto);
  }, Promise.resolve());

  await browser.close();
})();
