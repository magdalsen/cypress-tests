
describe('Visit website and check redirection', () => {
    before(() => {
      cy.login()
    })

    it('Check redirection', ()=> {
      cy.financeESGButton().click();
      cy.esgKpiButton().click({ force: true });

      cy.url().should('eq', Cypress.env('ESGKPI_URL'));
      cy.url().then(url => cy.log('Current URL is', url));
    })
})