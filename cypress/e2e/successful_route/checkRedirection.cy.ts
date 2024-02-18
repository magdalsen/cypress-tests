
describe('Visit website and check redirection', () => {
    before(() => {
      cy.login()
    })

    it('Check redirection', ()=> {
      cy.clickFinanceESGButton();
      cy.clickESGKpiButton();

      cy.url().should('eq', Cypress.env('ESGKPI_URL'));
      cy.url().then(url => cy.log('Current URL is', url));
    })
})