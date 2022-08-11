function describeName(Cypress, viewportSize, groupDefinition) {
  const groupString = groupDefinition ? ` - ${groupDefinition}` : "";
  return `${Cypress.browser.name} @ ${viewportSize.join("x")}${groupString}`;
}
/**
 * Takes the max height and width from x and y of viewport sizes
 */
function windowSize(viewportSizes) {
  return [
    Math.max(...viewportSizes.map((sizes) => sizes[0])),
    Math.max(...viewportSizes.map((sizes) => sizes[1])),
  ];
}

module.exports = {
  describeName,
  windowSize,
};
