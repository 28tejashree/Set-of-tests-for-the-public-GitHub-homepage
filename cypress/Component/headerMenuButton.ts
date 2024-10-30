const IDENTIFIERS = {
    githubLogoButton: `a[aria-label="Homepage"] .octicon.octicon-mark-github`,
    signUpButton: `a.HeaderMenu-link--sign-up`,
    pricingButton: `a.HeaderMenu-link`,
    h1Text: `h1`
};

export class HeaderMenuButton {
    private identifiers = IDENTIFIERS;

    public signUpText: string = `Welcome to GitHub! Let's begin the adventure`;
    public pricingText: string = `Pricing`;

     /**
     * Gets the GitHub logo element
     */
    public getGithubLogo(): Cypress.Chainable<JQuery<Element>> {
        return cy.get(this.identifiers.githubLogoButton);
    }

    /**
     * Clicks on the Sign-Up button
     */
    public clickOnSignUpButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.identifiers.signUpButton).click();
    }

    /**
     * Retrieves the main header text (H1) on a page
     */
    public getH1Text(): Cypress.Chainable<JQuery<Element>> {
        return cy.get(this.identifiers.h1Text);
    }
    /**
     * Clicks on the Pricing button
     */
    public clickOnPricingButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.identifiers.pricingButton).contains(this.pricingText).click();
    }
}
