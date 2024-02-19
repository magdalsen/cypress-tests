
describe('Visit website and assert button color', () => {
    before(() => {
      cy.login()
    })

    it('Assert button color', ()=> {
      cy.getInTouchBtn().should('have.css', 'background-color', 'rgb(255, 212, 60)');
    })
})