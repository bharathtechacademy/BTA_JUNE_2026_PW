import { test, expect } from '@playwright/test';

test('Handling frames within the web applications ', async ({ page }) => {


    // Navigate to the web page
    await page.goto('https://demoqa.com/frames');

    // Locate the page header element. 
    const pageHeader = await page.locator('h1[class="text-center"]');

    // Look at the page element that contains the frame. 
    const frameLocator = await page.frameLocator('iframe[id="frame1"]');

    // Look at the frame element. 
    const frameElement = await frameLocator.locator('h1[id="sampleHeading"]')

    // Copy and print the frame element text value. 
    console.log(await frameElement.textContent());

    // Copy and print the page header element text value. 
    console.log(await pageHeader.textContent());

});