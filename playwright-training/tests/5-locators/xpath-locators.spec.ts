

//XPath Locators

//Syntax 1 : //tagName[@attributeName = 'attributeValue' ]
//Syntax 2 : //tagName[text() = 'text-value' ]

//Syntax 3 : //tagName[contains(@attributeName , 'attributeValue' )]
//Syntax 4 : //tagName[contains( text() , 'text-value')]

//Syntax 5 : //tagName[starts-with(@attributeName , 'attributeValue' )]
//Syntax 6 : //tagName[starts-with( text() , 'text-value')]

//Syntax 7 : //tagName[@attribute1='attributeValue' and @attribute2='attributeValue' and text()= 'text-value']

//Syntax 8 : Advanced XPaths with relationships 

//reference-xpath ::relationship/target-xapth

//child
//parent
//ancestor
//following-sibling
//preceding-sibling
//following
//preceding
// / (child)
// // (with-in-the-family)


// target -> sibling -> parent -> ancestor -> ancstor's parent

//ancestor : //ul[@class="leftmenu"]
//parent : //li
//sibling: N/A
//target : //a[text()="Services"]

//ul[@class="leftmenu"]/child::li /child::a[text()="Services"]
//ul[@class="leftmenu"]//a[text()="Services"]
//li[text()="Solutions"]/following-sibling::li[2]/child::a[text()="Services"]


import { test, expect } from '@playwright/test';

test('XPath Locator ', async ({ page }) => {

    //Navigate to the Google application 
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    //Locate at the Parabank logo by using syntax 1
    await page.locator('//img[@class="logo"]');

    //Locate at the Parabank caption by using Syntax 2 
    await page.locator('//p[text()="Experience the difference"]');

    //Locate at the Parabank logo by using syntax 3
    await page.locator('//img[contains(@src,"logo")]');

    //Locate at the Parabank caption by using Syntax 4
    await page.locator('//p[contains(text(),"difference")]');

    //Locate at the Parabank logo by using syntax 5
    await page.locator('//img[starts-with(@src,"images/logo")]');

    //Locate at the Parabank caption by using Syntax 6
    await page.locator('//p[contains(text(),"//p[starts-with(text(),"Experience")]")]');

    //Locate at the Parabank logo by using syntax 7
    await page.locator('//img[@class="logo" and @title="ParaBank"  and  @alt="ParaBank"]');

    //Locate at the Parabank caption by using Syntax 7 
    await page.locator('//p[@class="caption" and text()="Experience the difference"]');

    //Locate the services link by using syntax 8. 
    await page.locator('//p[@class="caption" and text()="Experience the difference"]');

});