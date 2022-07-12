#! /usr/local/bin/node
const cypress = require("cypress");
const config = require("../cypress.config.js");

const BROWSERS = ["chrome", "firefox", "edge"];

BROWSERS.reduce((chain, browser) => {
  chain = chain.then(() => {
    console.log(`Starting: ${browser}`);
    return cypress.run({
      browser,
      config: {
        ...config,
        screenshotsFolder: `cypress/artifacts/${browser}/screenshots`,
        videosFolder: `cypress/artifacts/${browser}/videos`,
      },
    });
  });
  return chain;
}, Promise.resolve());
