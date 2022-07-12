function describeName(Cypress, viewportSize) {
  return `${Cypress.browser.name} @ ${viewportSize.join("x")}`;
}

module.exports = {
  describeName,
};
