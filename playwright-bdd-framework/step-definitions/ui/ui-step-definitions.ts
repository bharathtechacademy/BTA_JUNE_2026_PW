import { Given, When, Then } from '@cucumber/cucumber';
import CustomWorld from '../../support/world.ts';

//Given Launch the creatio CRM application
Given('Launch the creatio CRM application', async function (this: CustomWorld) {
    await this.loginPageSteps.launchApplication();
})

//Then Verify the cookies pop-up is displayed successfully
Then('Verify the cookies pop-up is displayed successfully', async function (this: CustomWorld) {
    await this.cookiesPageSteps.verifyCookiesPopUpIsDisplayed();
})

//And Verify the cookies popup contains the below text
Then('Verify the cookies popup contains the below text', async function (this: CustomWorld, expectedText : string) {
    await this.cookiesPageSteps.verifyCookiesPopUpContent(expectedText);
});

//And Verify the cookies pop-up contains the logos
Then('Verify the cookies pop-up contains the logos', async function (this: CustomWorld) {
    await this.cookiesPageSteps.verifyLogosDisplayedInCookiesPopUp();
})

//And Verify the cookies pop-up contains the switch buttons
Then('Verify the cookies pop-up contains the switch buttons', async function (this: CustomWorld) {
    await this.cookiesPageSteps.verifySwitchButtonsDisplayedInCookiesPopUp();
})

//And Verify the cookies pop-up contains the selection buttons
Then('Verify the cookies pop-up contains the selection buttons', async function (this: CustomWorld) {
    await this.cookiesPageSteps.verifySelectionButtonsDisplayedInCookiesPopUp();
})

//And Verify the cookies pop-up contains the show details link
Then('Verify the cookies pop-up contains the show details link', async function (this: CustomWorld) {
    await this.cookiesPageSteps.verifyShowDetailsLinkDisplayedInCookiesPopUp();
});

//When User clicks on the show details link
When('User clicks on the show details link', async function (this: CustomWorld) {
    await this.cookiesPageSteps.clickOnShowDetailsLink();
});

//Then Verify the cookies pop-up is expanded successfully
Then('Verify the cookies pop-up is expanded successfully', async function (this: CustomWorld) {
    await this.cookiesPageSteps.verifyExpandedViewOfCookiesPopUpIsDisplayed();
});

//When User clicks on the "Allow all" button
When('User clicks on the {string} button', async function (this: CustomWorld, buttonName: string) {
    await this.cookiesPageSteps.clickOnSelectionButton(buttonName);
});

//Then Verify the cookies pop-up should be disappeared 
Then('Verify the cookies pop-up should be disappeared', async function (this: CustomWorld) {
    await this.cookiesPageSteps.verifyCookiesPopUpIsDisappeared();
});

//And Verify the login page is displayed successfully
Then('Verify the login page is displayed successfully', async function (this: CustomWorld) {
    await this.loginPageSteps.verifyLoginPageIsDisplayed();
});

//When User enters the "<username>" and "<password>" credentials
When('User enters the {string} and {string} credentials', async function (this: CustomWorld, username: string, password: string) {
    await this.loginPageSteps.enterCredentials(username, password);
});

//And User clicks on the login button
When('User clicks on the login button', async function (this: CustomWorld) {
    await this.loginPageSteps.clickLoginButton();
});

//Then Login should be "<result>"
Then('Login should be {string}', async function (this: CustomWorld, result: string) {
    if(result.toLowerCase() === 'success') {
        await this.homePageSteps.verifyHomePageDisplayed();
    }else{
        await this.loginPageSteps.verifyLoginErrorMessageIsDisplayed();
    }
});

//When User clicks on the logout button
When('User clicks on the logout button', async function (this: CustomWorld) {
    await this.homePageSteps.clickLogoutButton();
});

//Then Verify the user is logged out successfully and navigated to the login page
Then('Verify the user is logged out successfully and navigated to the login page', async function (this: CustomWorld) {
    await this.loginPageSteps.verifyLoginPageIsDisplayed();
});

//When User clicks on the Forgot password link
When('User clicks on the Forgot password link', async function (this: CustomWorld) {
    await this.loginPageSteps.clickForgotPasswordLink();
});

//Then Verify the user is navigated to the forgot password page successfully
Then('Verify the user is navigated to the forgot password page successfully', async function (this: CustomWorld) {
    await this.loginPageSteps.verifyForgotPasswordConfirmationMessageIsDisplayed();
});

//And Verify the social media login options are displayed successfully on the login page
Then('Verify the social media login options are displayed successfully on the login page', async function (this: CustomWorld) {
    await this.loginPageSteps.verifySocialMediaLoginButtonsAreDisplayed();
});