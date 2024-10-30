const IDENTIFIERS = {
    dropdownHeader: `button.HeaderMenu-link`,
    dropdownMenu: `.HeaderMenu-dropdown.dropdown-menu-wide`,
    h1Text: `h1`
};
const headerMenu: string = "Product";

/**
 * Object defining dropdown menu items with their displayed text
 */
export const dropdownMenu: { [key: string]: string }={
    githubCopilot: "GitHub Copilot",
    security: "Security",
    actions: "Actions",
    codespaces: "Codespaces",
    issues: "Issues",
    codeReview: "Code Review",
    discussions: "Discussions",
    codeSearch: "Code Search",
    allFeatures: "All features", 
    documentation: "Documentation",
    githubSkills: "GitHub Skills"
}
/**
 * Object defining expected URL paths for each dropdown menu item
 */
export const navlinks: { [key: string]: string }={
    githubCopilotUrl: "features/copilot",
    securityUrl: "features/security",
    actionsUrl: "features/actions",
    codespacesUrl: "features/codespaces",
    issuesUrl: "features/issues",
    codeReviewUrl: "features/code-review",
    discussionUrl: "features/discussions" ,
    codeSearchUrl: "features/code-search" ,
    featuresUrl: "features",
    githubDocsUrl: "https://docs.github.com/en",
    githubSkillsUrl: "https://skills.github.com/"
}
export class HeaderMenuDropdown {
    private identifiers = IDENTIFIERS;

    /**
     * Gets the dropdown header element
     */
    public getDropdownHeader(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.identifiers.dropdownHeader);
    }

    /**
     * Gets the dropdown menu element and invokes it to show
     */
    public getDropdownMenuAndInvoke(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.identifiers.dropdownMenu).invoke('show');
    }
    /**
     * Retrieves the main header text (H1) on the page
     */
    public getH1Text(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.identifiers.h1Text);
    }
    /**
     * Hovers over the header menu to trigger the dropdown display
     */
    public hoverOnHeaderMenu(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getDropdownHeader().contains(headerMenu).realMouseMove(0, 0).realHover();
    }
}
