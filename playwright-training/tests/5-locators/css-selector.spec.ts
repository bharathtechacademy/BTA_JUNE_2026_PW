//Css Locator : CSS Locator is all about locating the web element by using CSS properties of the element. 

//Css Selector Syntaxes :

//Syntax 1 : tagName#id
//Syntax 2 : tagName.className
//Syntax 3 : tagName[attribute='value']
//Syntax 4 : tagName[attribute*='value'] // * Refers to "contains" in the attribute value
//Syntax 5 : tagName[attribute^='value'] // ^ Refers to "starts with" in the attribute value
//Syntax 6 : tagName[attribute$='value'] // $ Refers to "ends with" in the attribute value
//Syntax 7 : tagName[attribute1='value'] [attribute2='value'] // Refers to "and" in the attribute value


import { test, expect } from '@playwright/test';

test('CSS Selector Syntax 1', async ({ page }) => {

    //Navigate to the Google application 
    await page.goto('https://www.google.com');

    //Locate the 'Google search' text box using syntax 1 
    await page.locator('textarea#APjFqb');

    //Locate the Google search text box by using syntax 2
    await page.locator('textarea.gLFyf');

    //Locate the Google search text box by using syntax 3
    await page.locator('textarea[title="Search"]');

    //Locate the How search works link using syntax 4
    await page.locator('a[href*="howsearchworks"]');

    //Locate the How search works link using syntax 5
    await page.locator('a[href^="https://google.com/search/how"]');

    //Locate the How search works link using syntax 6
    await page.locator('a[href$="howsearchworks/?fg=1"]');

    //Locate the Google search text box by using syntax 7
    await page.locator('textarea[title="Search"][aria-label="Search"][name="q"]');
});
