import { defineConfig } from 'cypress';
import { env } from 'process';

export default defineConfig({
  viewportWidth: 12880,
  viewportHeight: 720,
  video: true,
  screenshotOnRunFailure: true,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  downloadsFolder: 'cypress/downloads',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: env.API_URL || 'http://localhost:3000',
    specPattern: [
      'test/app/E2E/**/*.{js,jsx,ts,tsx}',
      'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    ],
  },
});
