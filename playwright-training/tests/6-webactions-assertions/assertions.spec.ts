//Assertions : Assertions are nothing but the default methods provided by Playwright to compare expected result vs actual result. 

//In Playwright, there are two different types of assertions available. 

//1. Hard assertions : Hard assertion: Fail the program immediately when there is a mismatch. 
//2. Soft assertions : Soft assertion: Continue the program execution even when there is a mismatch and fail at the end of the test case.

//Syntax of Hard Assertion : expect(actual).toBe(expected)

//Syntax of Soft Assertion : expect.soft(actual).toBe(expected)

import { test, expect } from '@playwright/test';

// test('Hard Assertion', async ({ page }) => {

//     //Launch the Google application. 
//     await page.goto('https://www.google.com');

//     //Verify the title. 
//     await expect(page).toHaveTitle('Google2');

//     //Verify the current URL populated in the browser. 
//     await expect(page).toHaveURL('https://www.google.com/');

//     console.log("Execution completed successfully. ")

// })

test('Soft Assertion', async ({ page }) => {

    //Launch the Google application. 
    await page.goto('https://www.google.com');

    //Verify the title. 
    await expect.soft(page).toHaveTitle('Google2');

    //Verify the current URL populated in the browser. 
    await expect.soft(page).toHaveURL('https://www.google2.com/');

    console.log("Execution completed successfully. ")

})

//By default, Playwright provides us with multiple default assertion methods for day-to-day validations which we are going to perform on any application UI. 

//expect(element).toBeVisible() : This assertion is used to verify whether the element is visible on the page or not.
//expect(element).toBeHidden() : This assertion is used to verify whether the element is hidden on the page or not.
//expect(element).toBeEnabled() : This assertion is used to verify whether the element is enabled on the page or not.
//expect(element).toBeDisabled() : This assertion is used to verify whether the element is disabled on the page or not.
//expect(element).toBeChecked() : This assertion is used to verify whether the element is checked on the page or not.
//expect(element).toHaveText(text) : This assertion is used to verify whether the element has the specified text or not.
//expect(element).toHaveValue(value) : This assertion is used to verify whether the element has the specified value or not.
//expect(element).toHaveAttribute(name, value) : This assertion is used to verify whether the element has the specified attribute with the specified value or not.
//expect(page).toHaveTitle(title) : This assertion is used to verify whether the page has the specified title or not.
//expect(page).toHaveURL(url) : This assertion is used to verify whether the page has the specified URL or not.