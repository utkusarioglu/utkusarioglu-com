const { defineConfig } = require("cypress");

// const WINDOW_SIZE = [3840, 2160];
const WINDOW_SIZE = [1920, 1080];

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: "http://target-http-server:3000",
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.isHeadless) {
          switch (browser.name) {
            case "electron":
              launchOptions.preferences["width"] = WINDOW_SIZE[0];
              launchOptions.preferences["height"] = WINDOW_SIZE[1];
              launchOptions.preferences["resizable"] = false;
              break;
            case "chrome":
            case "edge":
              launchOptions.args.push(`--window-size=${WINDOW_SIZE.join(",")}`);
              // launchOptions.args.push(`--force-dark-mode=true`);
              break;
            case "firefox":
              launchOptions.args.push(`--width=${WINDOW_SIZE[0]}`);
              launchOptions.args.push(`--height=${WINDOW_SIZE[1]}`);
              break;
            default:
              throw new Error(`Unrecognized browser: ${browser.name}`);
          }
          return launchOptions;
        }
      });
    },
  },

  videoCompression: false,
  env: {
    windowSize: WINDOW_SIZE,
    viewportSizes: [
      [1920, 1080],
      [480, 850],
      [480, 720],
      // [320, 400],
    ],
  },
});
