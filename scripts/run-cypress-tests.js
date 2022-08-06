#! /usr/local/bin/node
const cypress = require("cypress");
const config = require("../cypress.config.js");

// This next line is expected to be reused
// const BROWSERS = ["chrome", "firefox", "edge"]
const BROWSERS = ["chrome"];

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
