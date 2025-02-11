Cypress.Commands.add('login', () => {
    cy.visit("https://www.advantageonlineshopping.com/#/");
    cy.wait(2000);

    cy.get("#menuUser").click();
    cy.wait(1000);

    cy.get('input[name="username"]').type("Carmen");
    cy.get('input[name="password"]').type("Casa123");

    cy.get("#sign_in_btn").click();
  });
  