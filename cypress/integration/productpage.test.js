describe("Page layout", () => {
  const URL = Cypress.env("HOST");

  beforeEach(() => {
    cy.visit(`${URL}/productpage`);
  });

  it("Should display the page title", () => {
    cy.contains("BookInfo Sample").should("be.visible");
  });

  it("Should display the default book title", () => {
    cy.contains("The Comedy of Errors").should("be.visible");
  });
});
