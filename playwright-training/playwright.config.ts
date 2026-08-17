import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',  //Where exactly are we maintaining the folder to have all our test cases to run by playwright
  /* Run tests in files in parallel */
  fullyParallel: true, //This will help us to run test cases in parallel to save time. 
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI, //Fail the test suite when the user is going to commit the code with test.only. 
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0, // If it is a CI-CD pipeline, retry two times when there is a failure. Otherwise, if it is a local computer, retry zero times. 
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 8 : 1, //Worker is an independent process to run your test case. (And if I'm by default, will deploy the workers based on the number of cores in your processor )
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html', //This configuration is going to generate an HTML report by default at the end of the execution. 
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  //increse the timeout for each test case to 180 sec
  // timeout: 180 * 1000, //This configuration is going to increase the timeout for each test case to 180 seconds.

 
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on', //on, on- first-retry, off (This configuration will collect traces during the execution process. )
    video: 'on', //(on, on-first-retry, off) This configuration is going to record the video of the test case execution.
    screenshot: 'on', // (on, on-failure, off) This configuration is going to take the screenshot when the test case is failed.
    headless:false
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
