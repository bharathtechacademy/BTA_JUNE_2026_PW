import {chromium, expect, test} from '@playwright/test';

test('browser actions', async ({}) => {

    // Launch the Chromium browser engine to get the Edge browser. 
    const browserEngine = await chromium.launch({channel : 'msedge', headless : false}); //default chrome browser, if we update '{channel : 'msedge'}' it will launch edge browser

    // Launch the browser context within the browser engine. (Incognito tab)
    const browserContext = await browserEngine.newContext();

    // Clear all the cookies within the browser context. 
    await browserContext.clearCookies();

    // Launch the new page within the browser context. (browser tab)
    const page = await browserContext.newPage();

    // Maximize the browser window to the specific resolution. (1920, 1080)
    await page.setViewportSize({width:1920, height:1080});

    // Launch the application by using URL www.google.com
    await page.goto("https://www.google.com");

    // Verify whether the Google application launched successfully within the browser window. 
    await expect(page).toHaveTitle("Google");

    // Launch the different application within the same page by using URL www.playwright.dev. 
    await page.goto("https://www.playwright.dev");

    // Navigate back to the previous application, Google. 
    await page.goBack();

    // Move forward to the next application, Playwright, within the browser. 
    await page.goForward();

    // Reload the page within the browser window. 
    await page.reload();

    // Launch the new tab within the same window 
    const newPage = await browserContext.newPage();

    // Launch the new application within the new window by using the URL www.selenium.dev. 
    await newPage.goto("https://www.selenium.dev");

    // Go back to the previous tab and display the Playwright application in the other tab. 
    await page.bringToFront();

    // Verify or capture the URL present in the current browser window. 
    let currentUrl = await page.url();
    console.log(currentUrl);

    // Close the current page. 
    await page.close();

    // Close the browser context and all the pages inside the context. 
    await browserContext.close();
    await browserEngine.close();

});