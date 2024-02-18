/// <reference types="cypress" />

Cypress.Commands.add('login', () => {
    cy.visit(Cypress.env('BASE_URL'));
})

// Return statements

const financeESGButton = () => {
    return '.header-nav-main.nav.nav-right > li > a';
}

const ESGKpiButton = () => {
    return '.sub-menu.nav-dropdown .ux-menu-link__link.flex > span';
}

const getInTouchButton = () => {
    return '.header-nav-main.nav.nav-right > .html.header-button-1 .button.primary'
}

// Buttons

Cypress.Commands.add('clickFinanceESGButton', () => {
    cy.get(financeESGButton()).contains('Finance & ESG').click();
})

Cypress.Commands.add('clickESGKpiButton', () => {
    cy.get(ESGKpiButton()).contains(' ESG KPI Engine ').click({ force: true });
})

Cypress.Commands.add('returnGetInTouchBtn', () => {
    cy.get(getInTouchButton())
})
