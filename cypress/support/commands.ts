/// <reference types="cypress" />

Cypress.Commands.add('login', () => {
    cy.visit(Cypress.env('BASE_URL'))
})