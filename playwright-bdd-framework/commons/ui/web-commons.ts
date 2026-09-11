import {Page,Locator, expect} from "@playwright/test";

export class WebCommons {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    //Launch the application and optionally verify the title. 
    async launchApplication(url: string, title?: string) {
        await this.page.goto(url);
        if (title) {
            await expect(this.page).toHaveTitle(title);
        }
    }

    //Generate Web Element from the Locator. 
    async element(locator: string): Promise<Locator> {
        return this.page.locator(locator);
    }

    async getElement(locator: string, locatorType: string, role?: string): Promise<Locator> {
        switch (locatorType.toLowerCase()) {
            case "xpath":
                return this.page.locator(`xpath=${locator}`);
            case "css":
                return this.page.locator(`css=${locator}`);
            case "placeholder":
                return this.page.getByPlaceholder(locator);
            case "text":
                return this.page.getByText(locator);
            case "role":
                return this.page.getByRole(role as any, { name: locator });
            case "label":
                return this.page.getByLabel(locator);

            default:
                throw new Error(`Unsupported locator type: ${locatorType}`);
        }
    }

    //Scroll to the target element when the element is not visible in the window. 
    async scrollToElement(locator: string) {
        const element = await this.element(locator);
        await element.scrollIntoViewIfNeeded();
    }

    //Click on the target element.
    async clickElement(locator: string) {
        const element = await this.element(locator);
        await this.scrollToElement(locator);
        await element.click();
    }

    //Type the text in the target element.
    async enterText(locator: string, text: string) {
        const element = await this.element(locator);
        await element.clear();
        await element.fill(text);
    }

    //Select an option from the drop-down. 
    async selectOption(locator: string, option: string) {
        const element = await this.element(locator);
        await this.scrollToElement(locator);
        await element.selectOption(option);
    }

    //Double click on the target element.
    async doubleClick(locator: string) {
        const element = await this.element(locator);
        await this.scrollToElement(locator);
        await element.dblclick();
    }

    //Right click on the target element.
    async rightClick(locator: string) {
        const element = await this.element(locator);
        await this.scrollToElement(locator);
        await element.click({ button: 'right' });
    }

    //Hover over the target element.
    async hoverOverElement(locator: string) {
        const element = await this.element(locator);
        await this.scrollToElement(locator);
        await element.hover();
    }

    //Select the checkbox. 
    async selectCheckbox(locator: string) {
        const element = await this.element(locator);
        await this.scrollToElement(locator);
        const isChecked = await element.isChecked();
        if (!isChecked) {
            await element.check();
        }
    }

    //Get the text from the web element. 
    async getText(locator: string): Promise<string|null> {
        const element = await this.element(locator);
        await this.scrollToElement(locator);
        return await element.textContent();
    }

    //Get the attribute value from the web element.
    async getAttribute(locator: string, attributeName: string): Promise<string|null> {
        const element = await this.element(locator);
        await this.scrollToElement(locator);
        return await element.getAttribute(attributeName);
    }

    //Method to verify the element is visible 
    async isElementVisible(locator: string): Promise<void> {
        const element = await this.element(locator);
        await expect(element).toBeVisible({ timeout: 30000 });
    }

    //Method to verify element is disappeared 
    async isElementDisappeared(locator: string): Promise<boolean> {
        const element = await this.element(locator);
        return await element.isHidden();
    }

    //Method to upload the file 
    async uploadFile(locator: string, filePath: string) {
        const element = await this.element(locator);
        await this.scrollToElement(locator);
        await element.setInputFiles(filePath);
    }

    //Method to Handle the Alert 
    async handleAlert(action: 'accept' | 'dismiss', promptText?: string) {
        this.page.once('dialog', async dialog => {
            if (action === 'accept') {
                await dialog.accept(promptText);
            } else {
                await dialog.dismiss();
            }
        });
    }

    //Method to take a screenshot 
    async takeScreenshot(path: string) {
        await this.page.screenshot({ path: path });
    }

    //Method to Refresh the page. 
    async refreshPage() {
        await this.page.reload();
    }

    //Method to set the resolution of the browser window 
    async setResolution(width: number, height: number) {
        await this.page.setViewportSize({ width, height });
    }

    //Method to launch the new tab 
    async launchNewTab(url: string) {
        const newPage = await this.page.context().newPage();
        return newPage.goto(url);
    }
        
    //Method to Locate the element inside the frame 
    async frameElement(frameLocator: string, elementLocator: string): Promise<Locator> {
        const frame = await this.page.frameLocator(frameLocator);
        return frame.locator(elementLocator);
    }

    //Method tocompare two values
    async compareValues(actualValue: string, expectedValue: string) {
        await expect(actualValue).toBe(expectedValue);
    } 

    //Method to Verify expected value contains actual value. 
    async verifyValueContains(actualValue: string | null, expectedValue: string) {
        await expect(actualValue).toContain(expectedValue);
    }

}