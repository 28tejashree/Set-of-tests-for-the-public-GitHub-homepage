

# GitHub Homepage Test Suite

This project automates testing for the public GitHub homepage using Cypress with TypeScript. The suite includes API and UI tests for verifying key navigation links, page elements, and external resources, providing high test coverage for the main components of the GitHub homepage.

## Project Structure
- **Components**: The project follows a page object model structure, storing element selectors and test actions in `HeaderMenuButton` and `HeaderMenuDropdown` classes.
- **Test Specs**: Each major area of the homepage, such as the GitHub logo, Product dropdown, and Pricing page, has dedicated test cases.
- **Configuration Files**:
  - `cypress.config.ts`: Contains Cypress configuration settings, including base URL and viewports.
  - `tsconfig.json`: TypeScript configuration enabling strict typing and Cypress types.
  - `package.json`: Lists dependencies and test-related scripts.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/github-homepage-test-suite.git
   ```
2. Navigate to the project directory:
   ```bash
   cd github-homepage-test-suite
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration
- **URL Data**: Ensure all target URLs are specified correctly in the `urls.json` file, located in `cypress/fixtures`.
- **Environment**: The default configuration in `cypress.config.ts` uses `https://github.com/` as the base URL. Modify this if targeting a different environment.

## Running Tests
To run tests locally:
```bash
npm test
```

To run tests in headless mode:
```bash
npm run test:ci
```

For an interactive experience, open the Cypress GUI:
```bash
npx cypress open
```

## Test Reports
After running tests, reports are saved in the `cypress/reports` directory. This includes screenshots and videos for any failed tests. The test report can be viewed by opening `cypress/reports/mochawesome.html`.

## Scripts
- **`npm test`**: Runs all tests and generates reports.
- **`npm run clean:reports`**: Clears previous test reports.
- **`npm run merge:reports`**: Merges all individual test reports into a single JSON file.
- **`npm run generate:htmlreport`**: Generates an HTML report from the merged JSON file.
- **`npm run test:ci`**: Runs tests headlessly in CI mode with reporting.
