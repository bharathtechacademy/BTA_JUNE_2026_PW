import { test } from '@playwright/test';
import { LoginPageSteps } from '../../page-objects/page-steps/login-page-steps.ts';
import { HomePageSteps } from '../../page-objects/page-steps/home-page-steps.ts';
import { CookiesPageSteps } from '../../page-objects/page-steps/cookies-page-steps.ts';
import data from '../../testdata/ui/data.json' with {type: 'json'};

let loginPage: LoginPageSteps;
let homePage: HomePageSteps;
let cookiesPage: CookiesPageSteps;

test.describe('Creatio CRM UI Tests', () => {

    //Initialize the page objects before each test
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPageSteps(page);
        homePage = new HomePageSteps(page);
        cookiesPage = new CookiesPageSteps(page);
    });

    //Test Case 1 : Verify cookies pop-up is displayed. 
    test('Verify cookies pop-up is displayed', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopUpIsDisplayed();
    });

    //Test Case 2: Verify cookies pop-up content. 
    test('Verify cookies pop-up content', async () => {
        let testData = data["Verify cookies pop-up content"];
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopUpIsDisplayed();
        await cookiesPage.verifyCookiesPopUpContent(testData.content);
    })

    //Test Case 3 : Verify cookies pop-up logs. 
    test('Verify Cookies pop-up logos', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopUpIsDisplayed();
        await cookiesPage.verifyLogosDisplayedInCookiesPopUp();
    })

    //Test Case 4 : Verify switch buttons displayed in the cookies pop. 
    test('Verify switch buttons displayed in the cookies pop-up', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopUpIsDisplayed();
        await cookiesPage.verifySwitchButtonsDisplayedInCookiesPopUp();
    });

    // Test Case 5 : Verify selection buttons displayed in the cookies pop-up.
    test('Verify selection buttons displayed in the cookies pop-up', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopUpIsDisplayed();
        await cookiesPage.verifySelectionButtonsDisplayedInCookiesPopUp();
    });

    // Test Case 6 : Verify show-details link displayed in the cookies pop-up.
    test('Verify show-details link displayed in the cookies pop-up', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopUpIsDisplayed();
        await cookiesPage.verifyShowDetailsLinkDisplayedInCookiesPopUp();
    });

    // Test Case 7 : Verify the cookies pop-up has disappeared after clicking on the Allow All button. 
    test('Verify the cookies pop-up has disappeared after clicking on the Allow All button', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopUpIsDisplayed();
        await cookiesPage.clickOnSelectionButton('Allow All');
        await cookiesPage.verifyCookiesPopUpIsDisappeared();
    });

    // Test Case 8 : Verify expanded view when the user clicks on the show details link. 
    test('Verify expanded view when the user clicks on the show details link', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopUpIsDisplayed();
        await cookiesPage.verifyShowDetailsLinkDisplayedInCookiesPopUp();
        await cookiesPage.clickOnShowDetailsLink();
        await cookiesPage.verifyExpandedViewOfCookiesPopUpIsDisplayed();
    });

    // Test Case 9 : Verify Login functionality with valid credentials. 
    test('Verify Login functionality with valid credentials', async () => {
        let testData = data["Verify Login functionality with valid credentials"];
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopUpIsDisplayed();
        await cookiesPage.clickOnSelectionButton('Allow All');
        await cookiesPage.verifyCookiesPopUpIsDisappeared();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterCredentials(testData.username, testData.password);
        await loginPage.clickLoginButton();
        await homePage.verifyHomePageDisplayed();
    });


    // Test Case 10 : Verify Login functionality with invalid credentials. 
    let testData = data["Verify Login functionality with invalid credentials"];
    for (let credentials of testData) {
        test('Verify Login functionality with invalid credentials - ' + credentials.username, async () => {
            await loginPage.launchApplication();
            await cookiesPage.verifyCookiesPopUpIsDisplayed();
            await cookiesPage.clickOnSelectionButton('Allow All');
            await cookiesPage.verifyCookiesPopUpIsDisappeared();
            await loginPage.verifyLoginPageIsDisplayed();
            await loginPage.enterCredentials(credentials.username, credentials.password);
            await loginPage.clickLoginButton();
            await loginPage.verifyLoginErrorMessageIsDisplayed();
        });
    }

});