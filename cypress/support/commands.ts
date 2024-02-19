/// <reference types="cypress" />

Cypress.Commands.add('login', () => {
    cy.visit(Cypress.env('BASE_URL'));
})

// Return statements

const getFinanceESGButton = () => {
    return '.header-nav-main.nav.nav-right > li > a';
}

const getESGKpiButton = () => {
    return '.sub-menu.nav-dropdown .ux-menu-link__link.flex > span';
}

const getGetInTouchButton = () => {
    return '.header-nav-main.nav.nav-right > .html.header-button-1 .button.primary';
}

// Buttons

Cypress.Commands.add('financeESGButton', () => {
    cy.get(getFinanceESGButton()).contains('Finance & ESG');
})

Cypress.Commands.add('esgKpiButton', () => {
    cy.get(getESGKpiButton()).contains(' ESG KPI Engine ');
})

Cypress.Commands.add('getInTouchBtn', () => {
    cy.get(getGetInTouchButton());
})
