import { Page, expect } from "@playwright/test";
import loginPage from '../page-elements/login-page-elements.json' with{type: 'json'};
import { WebCommons } from "../../commons/ui/web-commons.js";
import config from '../../config/config.json' with {type: 'json'};

export class LoginPageSteps {
    page: Page
    web: WebCommons

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Method to launch the application
    async launchApplication() {
        await this.web.launchApplication(config.app.url, config.app.title);
    }

    //Method to verify login page is displayed 
    async verifyLoginPageIsDisplayed() {
        await this.web.isElementVisible(loginPage.loginPageHeader);
    }

    // Method to verify login page header text
    async verifyLoginPageHeaderText(expectedHeader: string) {
        const headerText: string = await this.web.getText(loginPage.loginPageHeader);
        await this.web.compareText(headerText, expectedHeader);
    }

    // Method to verify business email field is displayed
    async verifyBusinessEmailFieldIsDisplayed() {
        await this.web.isElementVisible(loginPage.businessEmailTextBox);
    }

    // Method to verify password field is displayed
    async verifyPasswordFieldIsDisplayed() {
        await this.web.isElementVisible(loginPage.passwordTextBox);
    }

    // Method to verify login button is displayed
    async verifyLoginButtonIsDisplayed() {
        await this.web.isElementVisible(loginPage.loginButton);
    }

    // Method to verify alternative login label is displayed
    async verifyAlternativeLoginLabelIsDisplayed() {
        await this.web.isElementVisible(loginPage.orLogInUsingLabel);
    }

    //Method to enter username and password 
    async enterCredentials(username: string, password?: string) {
        await this.web.enterText(loginPage.businessEmailTextBox, username);
        if (password) {
            await this.web.enterText(loginPage.passwordTextBox, password);
        }
    }

    //Method to click on login button
    async clickLoginButton() {
        await this.web.clickElement(loginPage.loginButton);
    }

    //Method to click on forgot password link
    async clickForgotPasswordLink() {
        await this.web.clickElement(loginPage.forgotPasswordLink);
    }

    //Method to verify forgot password confirmation message is displayed
    async verifyForgotPasswordConfirmationMessageIsDisplayed() {
        await this.web.isElementVisible(loginPage.forgotPasswordConfirmationMsg);
    }

    //Method to click on the sign-up link
    async clickSignUpLink() {
        await this.web.clickElement(loginPage.signUpLink);
    }

    //Method to verify social media login buttons are displayed
    async verifySocialMediaLoginButtonsAreDisplayed() {
        await this.web.isElementVisible(loginPage.googleIcon);
        await this.web.isElementVisible(loginPage.linkedInIcon);
        const isFacebookVisible = await this.page.locator(loginPage.facebookIcon).first().isVisible();
        await expect(isFacebookVisible).toBeTruthy();
    }

    // Method to verify sign-up prompt section is displayed
    async verifySignUpSectionIsDisplayed() {
        await this.web.isElementVisible(loginPage.dontHaveAnAccountLabel);
        await this.web.isElementVisible(loginPage.signUpLink);
    }

    // Method to verify cookie settings icon is visible
    async verifyCookieSettingsIconIsDisplayed() {
        await this.web.isElementVisible(loginPage.cookieSettingsIcon);
    }

    // Method to verify chatbot icon is visible
    async verifyChatbotIconIsDisplayed() {
        await this.web.isElementVisible(loginPage.chatbotIcon);
    }

    //Method to verify login error message is displayed
    async verifyLoginErrorMessageIsDisplayed() {
        await this.web.isElementVisible(loginPage.loginErrorMessage);
    }

}