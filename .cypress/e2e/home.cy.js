const { describeName } = require("../utils/test.utils");

const url = "/";
const pages = ["About", "Resume", "Musings", "Canvas"];
const links = ["LinkedIn", "Instagram", "Twitter"];

Cypress.env().viewportSizes.forEach((viewportSize) => {
  describe(describeName(Cypress, viewportSize), () => {
    beforeEach(() => {
      cy.viewport(...viewportSize);
      cy.visit(url);
      cy.wait(5000);
    });

    it("Should contain expected links", () => {
      cy.screenshot();
      [...pages, ...links, "Theme"].forEach((link) => {
        cy.contains(link);
      });
    });

    pages.forEach((page) => {
      it(`Should navigate to ${page} page`, () => {
        cy.contains(page).click();
        cy.wait(1000);
        cy.screenshot();
      });
    });

    links.forEach((link) => {
      it(`Should contain ${link} link`, () => {
        cy.contains(link).should("contain", link);
      });
    });
  });
});
