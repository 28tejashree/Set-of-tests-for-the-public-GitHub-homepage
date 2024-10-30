import { defineConfig } from 'cypress';

export default defineConfig({
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/reports/screenshots',
  video: true,
  videosFolder: 'cypress/reports/videos',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mocha',
    quite: true,
    overwrite: false,
    html: true,
    charts: true,
    json: true,
    reportPageTitle: 'GitHub Homepage Test Report'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    specPattern: "cypress/e2e/**/*.cy.ts",
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: "https://github.com/"
  },
});
