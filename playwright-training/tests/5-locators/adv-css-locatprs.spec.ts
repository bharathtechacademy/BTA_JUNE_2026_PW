import { test, expect } from '@playwright/test';


//ancestor : ul[class="leftmenu"]
//parent : li
//target  : a[href="services.htm"]

// ancestor > parent > target

//'ul[class="leftmenu"] > li > a[href="services.htm"]

//li is the 2nd child of ul[class="leftmenu"]
//ul[class="leftmenu"] > li:nth-child(2) > a[href="services.htm"]

test('CSS Selector Syntax 1', async ({ page }) => {

    //Navigate to the Google application 
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    //Locate the 'Services' link using css locator
    await page.locator('ul[class="leftmenu"] > li > a[href="services.htm"]');

});