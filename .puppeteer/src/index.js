const puppeteer = require("puppeteer");

const artifactsPath = "/home/pptruser/artifacts";
const url = "https://www.utkusarioglu.com/resume";

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

(async () => {
  const browser = await puppeteer.launch({
    args: [
      // TODO get rid of this
      "--ignore-certificate-errors",
    ],
  });
  const page = await browser.newPage();
  page.setViewport({ width: 1920, height: 1080 });
  await page.goto(url, {
    waitUntil: "networkidle2",
  });
  await page.screenshot({ path: `${artifactsPath}/screenshots/resume.png` });

  await PAPER_FORMAT_VARIANTS.reduce(async (chain, { format, margin }) => {
    chain = chain.then(() =>
      page.pdf({
        displayHeaderFooter: false,
        omitBackground: true,
        path: `${artifactsPath}/raw/resume-${format}.pdf`,
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

  await browser.close();
})();
