declare namespace Cypress {
    interface Chainable {
        login(): Chainable<void>
    }
}

// Return statements

declare namespace Cypress {
    interface Chainable {
        financeESGButton(): string
    }
}

declare namespace Cypress {
    interface Chainable {
        ESGKpiButton(): string
    }
}

declare namespace Cypress {
    interface Chainable {
        getInTouchButton(): string
    }
}

// Buttons

declare namespace Cypress {
    interface Chainable {
        clickFinanceESGButton(): Chainable<void>
    }
}

declare namespace Cypress {
    interface Chainable {
        clickESGKpiButton(): Chainable<void>
    }
}

declare namespace Cypress {
    interface Chainable {
        returnGetInTouchBtn(): Chainable<void>
    }
}
