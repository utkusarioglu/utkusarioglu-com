function describeName(Cypress, viewportSize, groupDefinition) {
  const groupString = groupDefinition ? ` - ${groupDefinition}` : "";
  return `${Cypress.browser.name} @ ${viewportSize.join("x")}${groupString}`;
}
/**
 * Takes the max height and width from x and y of viewport sizes
 */
function calculateE2eWindowSize(viewportSizes) {
  return [
    Math.max(...viewportSizes.map((sizes) => sizes[0])),
    Math.max(...viewportSizes.map((sizes) => sizes[1])),
  ];
}

/**
 * Gets the listed browsers from `.env`
 */
function getE2eBrowsers() {
  return process.env.E2E_BROWSERS.split(",");
}

/**
 * Gets the viewport sizes from `.env`
 */
function getE2eViewportSizes() {
  return process.env.E2E_VIEWPORT_SIZES.split(",").map((size) =>
    size.split("x").map((str) => +str)
  );
}

module.exports = {
  describeName,
  calculateE2eWindowSize,
  getE2eBrowsers,
  getE2eViewportSizes,
};
