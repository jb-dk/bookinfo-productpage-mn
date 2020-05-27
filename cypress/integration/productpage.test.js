describe("Page layout", () => {
    const URL = Cypress.env("HOST");

    beforeEach(() => {
        cy.visit(`${URL}/productpage`);
    });

    it("Should display the page title", () => {
        cy.contains("BookInfo Sample").should("be.visible");
    });

    // it("Should display the default book title", () => {
    //     cy.contains("The Comedy of Errors").should("be.visible");
    // });

    it("Should be able to see a sign in button", () => {
        cy.contains("Sign in").should("be.visible");
    });

    it("Should always display a navigation", () => {
        cy.get("nav.navbar").should("be.visible")
    });

    it("Should display the book cover", () => {
        cy.get("img").should("be.visible");
    })

});
