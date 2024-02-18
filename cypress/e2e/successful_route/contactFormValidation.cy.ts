
describe('Visit website and check email validation', () => {
    beforeEach(() => {
        cy.login()
    })

    
    const getIframeDocument = () => {
        return cy
        .get('iframe[class="hs-form-iframe"]')
        .its('0.contentDocument').should('exist')
      }
      
      const getIframeBody = () => {
        return getIframeDocument()
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
      }

    it('Email validation', ()=> {
        cy.returnGetInTouchBtn().click();
        cy.url().should('eq', Cypress.env('CONTACT_URL'));
        getIframeBody().find('.hs_email .input input').type(Cypress.env('badEmailData'));
        getIframeBody().find('.hs_email ul.hs-error-msgs label').should('contain', 'Email must be formatted correctly.');
    })
})
