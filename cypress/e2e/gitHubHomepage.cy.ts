import { HeaderMenuButton} from "../Component/headerMenuButton";
import { HeaderMenuDropdown, dropdownMenu, navlinks } from "../Component/headerMenuDropdown";

const headerMenuButton: HeaderMenuButton = new HeaderMenuButton();
const headerMenuDropdown: HeaderMenuDropdown = new HeaderMenuDropdown()

context("Automate tests for the public GitHub homepage using Cypress with TypeScript", () => {
    let urls: { signupUrl: string; pricingUrl: string };

    beforeEach(function() {
        cy.fixture('urls.json').then((data:any) => {
            urls = data;
        });
        cy.visit('/');
    });

    describe("Verify GitHub logo and Sign Up page button", () => {
        it('should display the GitHub logo on the homepage', () => {
            headerMenuButton.getGithubLogo().should('be.visible');
        });

        it('should navigate to the Sign Up page when the Sign Up button is clicked', () => {
            headerMenuButton.clickOnSignUpButton();
            cy.url().then((url) => {
                const urlObj = new URL(url);
                expect(urlObj.pathname).to.equal(urls.signupUrl);
            });
            headerMenuButton.getH1Text().should('contain', headerMenuButton.signUpText);
        });
    });

    describe('Navigation links "Product" redirect to the correct pages', () => {
        /**
         * Interface for defining navigation links with text and expected URLs
         */
        interface NavLink {
            linkText: string;
            expectedUrl: string;
        }
        /**
         * Array of internal navigation links with link text and expected URL paths
         */
        const navLinks: NavLink[] = [
            { linkText: dropdownMenu.githubCopilot, expectedUrl: navlinks.githubCopilotUrl },
            { linkText: dropdownMenu.security, expectedUrl: navlinks.securityUrl },
            { linkText: dropdownMenu.actions, expectedUrl: navlinks.actionsUrl },
            { linkText: dropdownMenu.codespaces, expectedUrl: navlinks.codespacesUrl },
            { linkText: dropdownMenu.issues, expectedUrl: navlinks.issuesUrl },
            { linkText: dropdownMenu.codeReview, expectedUrl: navlinks.codeReviewUrl },
            { linkText: dropdownMenu.discussions, expectedUrl: navlinks.discussionUrl },
            { linkText: dropdownMenu.codeSearch, expectedUrl: navlinks.codeSearchUrl },
            { linkText: dropdownMenu.allFeatures, expectedUrl: navlinks.featuresUrl }
        ];

        /**
         * Array of external navigation links with link text and full URLs
         */
        const externalNavLinks: NavLink[] = [
            { linkText: dropdownMenu.documentation, expectedUrl: navlinks.githubDocsUrl },
            { linkText: dropdownMenu.githubSkills, expectedUrl: navlinks.githubSkillsUrl }
        ];
        /**
        * Test for each internal navigation link to verify it navigates to the correct page
        */
        navLinks.forEach(({ linkText, expectedUrl }) => {
            it(`should navigate to the ${linkText} page`, () => {
                headerMenuDropdown.hoverOnHeaderMenu();
                headerMenuDropdown.getDropdownMenuAndInvoke().should('be.visible');
                cy.contains(linkText).click();
                cy.url().should('include', expectedUrl);
                headerMenuDropdown.getH1Text().should('be.visible');
                cy.go('back');
            });
        });

        externalNavLinks.forEach(({ linkText, expectedUrl }) => {
            it(`should navigate to the external ${linkText} page`, () => {
                headerMenuDropdown.hoverOnHeaderMenu();
                headerMenuDropdown.getDropdownMenuAndInvoke().should('be.visible');
                cy.contains(linkText).invoke('removeAttr', 'target').click();
                cy.url().should('eq', expectedUrl);
                headerMenuDropdown.getH1Text().should('be.visible');
            });
        });
    });

    describe("Navigation links 'Pricing' redirect to the correct page", () => {
        it("should navigate to the Pricing page", () => {
            headerMenuButton.clickOnPricingButton();
            cy.url().then((url) => {
                const urlObj = new URL(url);
                expect(urlObj.pathname).to.equal( urls.pricingUrl);
            });
        });
    });
});

