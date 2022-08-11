const { describeName } = require("../utils/test.utils");

const url = "/";
const pages = ["About", "Resume", "Musings", "Canvas"];
const links = ["LinkedIn", "Instagram", "Twitter"];

Cypress.env().viewportSizes.forEach((viewportSize) => {
  describe(
    describeName(Cypress, viewportSize, "Themes from localStorage"),
    () => {
      const commonActions = () => {
        cy.viewport(...viewportSize);
        cy.visit(url);
        cy.wait(30000);
        cy.screenshot();
      };

      it("Should render light theme background as expected", () => {
        commonActions();
        cy.get("html").should("not.have.class", "dark");
      });

      it("Should render light theme background as expected", () => {
        window.localStorage.setItem("theme", "dark");
        commonActions();
        cy.get("html").should("have.class", "dark");
      });
    }
  );

  describe(describeName(Cypress, viewportSize, "navigation"), () => {
    beforeEach(() => {
      cy.viewport(...viewportSize);
      cy.visit(url);
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
        cy.wait(2000);
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
