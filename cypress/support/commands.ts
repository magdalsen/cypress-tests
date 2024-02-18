/// <reference types="cypress" />

Cypress.Commands.add('login', () => {
    cy.visit(Cypress.env('BASE_URL'));
})

// Buttons

Cypress.Commands.add('clickFinanceESGButton', () => {
    cy.get('.header-nav-main.nav.nav-right > li > a').contains('Finance & ESG').click();
})

Cypress.Commands.add('clickESGKpiButton', () => {
    cy.get('.sub-menu.nav-dropdown .ux-menu-link__link.flex > span').contains(' ESG KPI Engine ').click({ force: true });
})

Cypress.Commands.add('returnGetInTouchBtn', () => {
    cy.get('.header-nav-main.nav.nav-right > .html.header-button-1 .button.primary')
})
