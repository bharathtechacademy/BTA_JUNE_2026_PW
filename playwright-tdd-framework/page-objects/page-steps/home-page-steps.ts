import { Page } from "@playwright/test";
import homePage from '../page-elements/home-page-elements.json' with{type: 'json'};
import { WebCommons } from "../../commons/ui/web-commons.js";

export class HomePageSteps {
    page: Page
    web: WebCommons

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    // Method to verify home page displayed after successful login
    async verifyHomePageDisplayed() {
         await this.web.isElementVisible(homePage.homePageHeader);
    }

    // Method to verify profile icon and click on the profile icon 
    async verifyProfileIconAndClick() {
        await this.web.isElementVisible(homePage.profile);
        await this.web.clickElement(homePage.profile);
    }

    // Method to click on the log out button.
    async clickLogoutButton() {
        await this.web.clickElement(homePage.logoutLink);
    }
}
