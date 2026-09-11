import {Browser, BrowserContext, chromium, Page} from '@playwright/test';
import {Before, After, BeforeAll, AfterAll, setDefaultTimeout} from '@cucumber/cucumber';
import CustomWorld from './world.ts';

let browser: Browser;
let context: BrowserContext;
let page: Page;

setDefaultTimeout(90 * 1000); // Set default timeout to 90 seconds

//Method to launch the browser engine before executing all the test cases 
BeforeAll(async () => {
    // Launch the browser engine (chromium, firefox, webkit)
    browser = await chromium.launch({headless: false}); //channel: 'msedge', 
});

//Method to create a new browser context and page for each and every test case /test scenario
Before(async function (this: CustomWorld) {
    context = await browser.newContext();
    page = await context.newPage();
    
    this.page = page; // Assign the page to the world context for use in step definitions
    this.initializePageObjects(); // Initialize page objects for the current scenario and provide browser details
});

//Method to close the browser context after executing each and every test case /test scenario
After(async (scenario) => {

    //Capture and attach a screenshot if the scenario fails. 
    if(scenario.result?.status === 'FAILED'){
        const screentshot = await page.screenshot({path:`./reports/screenshots/${scenario.pickle.name}.png`})
        // attach(screentshot, 'image/png');
    }

    // Close the browser context and all the pages within it
    await context.close();
});

//Method to close the browser engine after executing all the test cases
AfterAll(async () => {
    // Close the browser engine
    await browser.close();
});