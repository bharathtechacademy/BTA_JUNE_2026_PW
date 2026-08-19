import { Page } from "@playwright/test";
import cookiePage from '../page-elements/cookies-page-elements.json' with{type: 'json'};
import { WebCommons } from "../../commons/ui/web-commons.js";

export class CookiesPageSteps {
     page: Page
     web: WebCommons

     constructor(page: Page) {
          this.page = page;
          this.web = new WebCommons(page);
     }

     //Method to verify the cookies pop is displayed
     async verifyCookiesPopUpIsDisplayed() {
          await this.web.isElementVisible(cookiePage.cookiesHeader);
     }

     //Method to verify cookies popup content 
     async verifyCookiesPopUpContent(expectedContent: string) {
          await this.web.isElementVisible(cookiePage.cookiesContent);
          const actualContent: string | null = await this.web.getText(cookiePage.cookiesContent);
          await this.web.verifyValueContains(actualContent, expectedContent);
     }

     //Method to Verify Logos Displayed in the Cookies Popup 
     async verifyLogosDisplayedInCookiesPopUp() {
          await this.web.isElementVisible(cookiePage.creatioLogo);
          await this.web.isElementVisible(cookiePage.cookiebotLogo);
     }

     //Method to Verify Switch buttons displayed on the cookies popup. 
     async verifySwitchButtonsDisplayedInCookiesPopUp() {
          await this.web.isElementVisible(cookiePage.necessarySwitchButton);
          await this.web.isElementVisible(cookiePage.preferencesSwitchButton);
          await this.web.isElementVisible(cookiePage.statisticsSwitchButton);
          await this.web.isElementVisible(cookiePage.marketingSwitchButton);
     }

     //Method to verify selection buttons displayed on the cookies popup.
     async verifySelectionButtonsDisplayedInCookiesPopUp() {
          await this.web.isElementVisible(cookiePage.allowAllButton);
          await this.web.isElementVisible(cookiePage.allowSelectionButton);
          await this.web.isElementVisible(cookiePage.denyButton);
     }

     //Method to verify show-details link displayed on the cookies popup.
     async verifyShowDetailsLinkDisplayedInCookiesPopUp() {
          await this.web.isElementVisible(cookiePage.showDetailsLink);
     }

     //Method to click on the selection button 
     async clickOnSelectionButton(buttonName: string) {
          switch (buttonName) {
               case 'Allow All':
                    await this.web.clickElement(cookiePage.allowAllButton);
                    break;
               case 'Allow Selection':
                    await this.web.clickElement(cookiePage.allowSelectionButton);
                    break;
               case 'Deny':
                    await this.web.clickElement(cookiePage.denyButton);
                    break;
               default:
                    throw new Error(`Invalid button name: ${buttonName}`);
          }
     }

     // Method to verify cookies popup is disappeared after clicking on the selection button
     async verifyCookiesPopUpIsDisappeared() {
          await this.web.isElementDisappeared(cookiePage.cookiesHeader);
     }

     // Method to click on the show-details link
     async clickOnShowDetailsLink() {
          await this.web.clickElement(cookiePage.showDetailsLink);
     }

     // Method to verify expanded view of the cookies popup is displayed after clicking on the show-details link
     async verifyExpandedViewOfCookiesPopUpIsDisplayed() {
          await this.web.isElementVisible(cookiePage.cookiePopupExpandedView);
     }

}