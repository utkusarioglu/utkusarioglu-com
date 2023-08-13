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

async function createSingle(browser, specialtyId, includePhoto) {
  const url = [
    baseUrl,
    "?",
    `specialty-id=${specialtyId}`,
    "&",
    `include-photo=${includePhoto ? "true" : "false"}`,
  ].join("");
  const resumeCode = [specialtyId, includePhoto ? "p" : "n"].join("");
  const screenshotPath = `${artifactsPath}/screenshots/resume-${resumeCode}.png`;

  console.log({
    where: "before paper loop",
    baseUrl,
    url,
    specialtyId,
    includePhoto,
    resumeCode,
  });
  const page = await browser.newPage();
  page.setViewport({ width: 1920, height: 1080 });
  await page.goto(url, {
    waitUntil: "networkidle2",
  });
  await page.screenshot({
    path: screenshotPath,
  });

  await PAPER_FORMAT_VARIANTS.reduce(async (chain, { format, margin }) => {
    const resumePath = `${artifactsPath}/raw/resume-${format}-${resumeCode}.pdf`;
    console.log({
      where: "in paper loop",
      resumePath,
    });
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
  await page.close();
}

(async () => {
  const browser = await puppeteer.launch({
    args: [
      // TODO get rid of this
      "--ignore-certificate-errors",
    ],
  });

  const matrix = createMatrix(SPECIALTY_VARIANTS, PHOTO_VARIANTS);
  console.log({ matrix });
  await matrix.reduce((acc, { specialtyId, includePhoto }) => {
    console.log({ specialtyId, includePhoto });
    acc = acc.then(() => createSingle(browser, specialtyId, includePhoto));
    return acc;
  }, Promise.resolve());

  await browser.close();
})();
