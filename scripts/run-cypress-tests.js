#! /usr/local/bin/node
const cypress = require("cypress");
const {
  getE2eBrowsers,
  getE2eViewportSizes,
  calculateE2eWindowSize,
} = require("../cypress/utils/test.utils.js");
const config = require("../cypress.config.js");

const browsers = getE2eBrowsers();
const viewportSizes = getE2eViewportSizes();
const windowSize = calculateE2eWindowSize(viewportSizes);

browsers.reduce((chain, browser) => {
  chain = chain.then(() => {
    console.log(`Starting: ${browser}`);
    return cypress.run({
      browser,
      config: {
        ...config,
        env: {
          ...config.env,
          windowSize,
          viewportSizes,
          browsers,
        },
        screenshotsFolder: `cypress/artifacts/${browser}/screenshots`,
        videosFolder: `cypress/artifacts/${browser}/videos`,
      },
    });
  });
  return chain;
}, Promise.resolve());
