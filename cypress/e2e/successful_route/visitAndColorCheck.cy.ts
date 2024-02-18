
describe('Visit website', () => {
    before(() => {
      cy.login()
    })

    it('Visit website and assert button color', ()=> {
      cy.get('.header-nav-main.nav.nav-right > .html.header-button-1 .button.primary').should('have.css', 'background-color', 'rgb(255, 212, 60)');
    })
})