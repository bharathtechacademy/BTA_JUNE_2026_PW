import {Page,Locator, expect} from "@playwright/test";

export class WebCommons {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigates to the specified URL and optionally validates the page title.
     * @param url - The application URL to open.
     * @param title - Optional expected page title to verify after navigation.
     * @returns Promise<void> resolves when navigation completes and the optional title assertion passes.
     */
    async launchApplication(url: string, title?: string) {
        await this.page.goto(url);
        if (title) {
            await expect(this.page).toHaveTitle(title);
        }
    }

    /**
     * Creates a Playwright locator using a generic locator method pattern.
     * Supported methods include getByRole, getByText, getByLabel, getByPlaceholder, getByAltText, and getByTitle.
     * @param locator - A string in the format method_value, such as getByRole_button or getByText_Login.
     * @param role - The ARIA role required when using the getByRole locator method.
     * @returns Promise<Locator> representing the located element on the page.
     * @throws Error if the locator method is unsupported or if getByRole is used without a role.
     */
    async locateElementByMethod(locator: string, role?: Parameters<Page['getByRole']>[0]): Promise<Locator> {
        const values = locator.split('_');
        const method = values[0];
        const value = values[1];

        if (method === 'getByRole') {
            if (!role) {
                throw new Error('Role is required for getByRole locator method.');
            }
            return this.page.getByRole(role, { name: value ?? '' });
        } else if (method === 'getByText') {
            return this.page.getByText(value ?? '');
        } else if (method === 'getByLabel') {
            return this.page.getByLabel(value ?? '');
        } else if (method === 'getByPlaceholder') {
            return this.page.getByPlaceholder(value ?? '');
        } else if (method === 'getByAltText') {
            return this.page.getByAltText(value ?? '');
        } else if (method === 'getByTitle') {
            return this.page.getByTitle(value ?? '');
        }

        throw new Error(`Unsupported locator method: ${method}`);
    }

    /**
     * Creates a locator for a CSS or Playwright selector on the current page.
     * @param locator - Selector string used to locate the element on the page.
     * @returns Promise<Locator> for the matched element.
     */
    async element(locator: string): Promise<Locator> {
        return this.page.locator(locator);
    }

    /**
     * Scrolls the page until the target element is in view.
     * @param locator - Selector string of the element to scroll into view.
     * @returns Promise<void> resolves when the scroll action is complete.
     */
    async scrollToElement(locator: string) {
        const element = await this.element(locator);
        await element.scrollIntoViewIfNeeded();
    }

    /**
     * Clicks on an element identified by the provided locator.
     * @param locator - Selector of the element to click.
     * @returns Promise<void> resolves after the click is performed.
     */
    async clickElement(locator: string) {
        const element = await this.element(locator);
        await this.scrollToElement(locator);
        await element.click();
    }

    /**
     * Enters text into an input or editable field.
     * @param locator - Selector of the field to populate.
     * @param text - Text value to type or set in the field.
     * @returns Promise<void> resolves after the field is cleared and filled with the provided text.
     */
    async enterText(locator: string, text: string) {
        const element = await this.element(locator);
        await element.clear();
        await element.fill(text);
    }

    /**
     * Selects an option from a dropdown or select element.
     * @param locator - Selector of the dropdown element.
     * @param option - Option value or label used for selection.
     * @returns Promise<void> resolves after the option is selected.
     */
    async selectOption(locator: string, option: string) {
        const element = await this.element(locator);
        await this.scrollToElement(locator);
        await element.selectOption(option);
    }

    /**
     * Performs a double-click action on the selected element.
     * @param locator - Selector of the element to double-click.
     * @returns Promise<void> resolves after the double-click operation is completed.
     */
    async doubleClick(locator: string) {
        const element = await this.element(locator);
        await this.scrollToElement(locator);
        await element.dblclick();
    }

    /**
     * Performs a right-click action on the selected element.
     * @param locator - Selector of the element to right-click.
     * @returns Promise<void> resolves after the context click operation is completed.
     */
    async rightClick(locator: string) {
        const element = await this.element(locator);
        await this.scrollToElement(locator);
        await element.click({ button: 'right' });
    }

    /**
     * Moves the mouse pointer over the target element to trigger hover behavior.
     * @param locator - Selector of the element to hover.
     * @returns Promise<void> resolves after hover action is completed.
     */
    async hoverOverElement(locator: string) {
        const element = await this.element(locator);
        await this.scrollToElement(locator);
        await element.hover();
    }

    /**
     * Checks or unchecks a checkbox based on the required status.
     * @param locator - Selector of the checkbox element.
     * @param status - Expected checkbox state. true means checked, false means unchecked.
     * @returns Promise<void> resolves after the checkbox is set to the required state.
     */
    async selectCheckbox(locator: string, status: boolean) {
        const element = await this.element(locator);
        const checked = await element.isChecked();
        if (checked != status) {
            await element.check();
        }
    }

    /**
     * Retrieves the visible text content of a web element.
     * @param locator - Selector of the element whose text needs to be read.
     * @returns Promise<string> containing the text content or an empty string if no text is present.
     */
    async getText(locator: string): Promise<string> {
        const element = await this.element(locator);
        await this.scrollToElement(locator);
        return (await element.textContent()) || "";
    }

    /**
     * Reads a specific HTML attribute value from a web element.
     * @param locator - Selector of the element whose attribute is being read.
     * @param attributeName - Name of the attribute to fetch, such as value, href, id, or class.
     * @returns Promise<string | null> attribute value if present, otherwise null.
     */
    async getAttribute(locator: string, attributeName: string): Promise<string | null> {
        const element = await this.element(locator);
        await this.scrollToElement(locator);
        return await element.getAttribute(attributeName);
    }

    /**
     * Verifies that the target element is visible on the page within the default timeout.
     * @param locator - Selector of the element to check for visibility.
     * @returns Promise<void> resolves when the element is visible or throws if it is not.
     */
    async isElementVisible(locator: string): Promise<void> {
        const element = await this.element(locator);
        await expect(element).toBeVisible({ timeout: 30000 });
    }

    /**
     * Verifies whether a target element has disappeared from the page.
     * @param locator - Selector of the element to monitor.
     * @returns Promise<boolean> true when the element is hidden or removed, otherwise false.
     */
    async isElementDisappeared(locator: string): Promise<boolean> {
        const element = await this.element(locator);
        return await element.isHidden();
    }

    /**
     * Uploads a file into an input element of type file.
     * @param locator - Selector of the file input control.
     * @param filePath - Absolute or relative path of the file to upload.
     * @returns Promise<void> resolves after the file is attached to the input.
     */
    async uploadFile(locator: string, filePath: string) {
        const element = await this.element(locator);
        await this.scrollToElement(locator);
        await element.setInputFiles(filePath);
    }

    /**
     * Registers a browser dialog handler for alert, confirm, or prompt dialogs.
     * @param action - Action to perform on the dialog: accept or dismiss.
     * @param promptText - Optional text to enter into a prompt dialog when accepting.
     * @returns void This method sets up the event listener and does not return a value.
     */
    async handleAlert(action: 'accept' | 'dismiss', promptText?: string) {
        this.page.once('dialog', async dialog => {
            if (action === 'accept') {
                await dialog.accept(promptText);
            } else {
                await dialog.dismiss();
            }
        });
    }

    /**
     * Captures a screenshot of the current page and saves it to the provided file path.
     * @param path - Destination path for the screenshot file.
     * @returns Promise<void> resolves after the screenshot is saved.
     */
    async takeScreenshot(path: string) {
        await this.page.screenshot({ path: path });
    }

    /**
     * Refreshes the current page.
     * @returns Promise<void> resolves after the page reload action is complete.
     */
    async refreshPage() {
        await this.page.reload();
    }

    /**
     * Sets the browser viewport size for the current page.
     * @param width - Width of the browser viewport in pixels.
     * @param height - Height of the browser viewport in pixels.
     * @returns Promise<void> resolves after the viewport is resized.
     */
    async setResolution(width: number, height: number) {
        await this.page.setViewportSize({ width, height });
    }

    /**
     * Opens a new browser tab and navigates it to the specified URL.
     * @param url - URL to load in the newly created tab.
     * @returns Promise<unknown> resolves with the result of page navigation.
     */
    async launchNewTab(url: string) {
        const newPage = await this.page.context().newPage();
        return newPage.goto(url);
    }

    /**
     * Locates an element inside a specific iframe or frame using the frame selector and child element selector.
     * @param frameLocator - Selector used to locate the frame.
     * @param elementLocator - Selector used to locate the inner element inside the frame.
     * @returns Promise<Locator> for the element found within the selected frame.
     */
    async frameElement(frameLocator: string, elementLocator: string): Promise<Locator> {
        const frame = await this.page.frameLocator(frameLocator);
        return frame.locator(elementLocator);
    }

    /**
     * Compares two string values for exact equality using Playwright assertion.
     * @param actualValue - Actual value obtained from the application.
     * @param expectedValue - Expected value to compare against.
     * @returns Promise<void> resolves if both values are equal, otherwise throws an assertion error.
     */
    async compareValues(actualValue: string, expectedValue: string) {
        await expect(actualValue).toBe(expectedValue);
    }

    /**
     * Verifies that the actual value contains the expected substring.
     * @param actualValue - Actual text or string value.
     * @param expectedValue - Substring expected to be present in the actual value.
     * @returns Promise<void> resolves if the actual value contains the expected value.
     */
    async verifyValueContains(actualValue: string, expectedValue: string) {
        await expect(actualValue).toContain(expectedValue);
    }

    /**
     * Verifies that the trimmed actual value contains the expected string.
     * @param actualValue - Actual string value captured from the UI.
     * @param expectedValue - Expected substring to look for after trimming spaces.
     * @returns Promise<void> resolves if the trimmed actual text contains the expected value.
     */
    async compareText(actualValue: string, expectedValue: string) {
        await expect(actualValue.trim()).toContain(expectedValue);
    }
}