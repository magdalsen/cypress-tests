declare namespace Cypress {
    interface Chainable {
        login(): Chainable<void>
    }
}

// Return statements

declare namespace Cypress {
    interface Chainable {
        getFinanceESGButton(): string
    }
}

declare namespace Cypress {
    interface Chainable {
        getESGKpiButton(): string
    }
}

declare namespace Cypress {
    interface Chainable {
        getGetInTouchButton(): string
    }
}

// Buttons

declare namespace Cypress {
    interface Chainable {
        financeESGButton(): Chainable<void>
    }
}

declare namespace Cypress {
    interface Chainable {
        esgKpiButton(): Chainable<void>
    }
}

declare namespace Cypress {
    interface Chainable {
        getInTouchBtn(): Chainable<void>
    }
}
