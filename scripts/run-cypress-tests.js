#! /usr/local/bin/node
const cypress = require("cypress");
const config = require("../cypress.config.js");
const { windowSize } = require("../cypress/utils/test.utils.js");

const BROWSERS = ["chrome", "firefox", "edge"];

const VIEWPORT_SIZES = [
  [1920, 1080],
  [540, 1200], // 1080/2, 2400/2
  // [480, 850],
  [480, 720],
  // [320, 400],
];

BROWSERS.reduce((chain, browser) => {
  chain = chain.then(() => {
    console.log(`Starting: ${browser}`);
    return cypress.run({
      browser,
      config: {
        ...config,
        env: {
          ...config.env,
          windowSize: windowSize(VIEWPORT_SIZES),
          viewportSizes: VIEWPORT_SIZES,
        },
        screenshotsFolder: `cypress/artifacts/${browser}/screenshots`,
        videosFolder: `cypress/artifacts/${browser}/videos`,
      },
    });
  });
  return chain;
}, Promise.resolve());
