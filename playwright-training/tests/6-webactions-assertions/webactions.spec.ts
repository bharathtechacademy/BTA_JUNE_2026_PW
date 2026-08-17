import { test, expect } from '@playwright/test';

test('Web Actions and Assertions', async ({ page }) => {

    // Navigate to the web page
    await page.goto('https://example.com');

    // Locate the web element
    const element = page.locator('h1[value="element"]');


    /* ================================================
             Common Web Element Validations
    ================================================== */

    //Check if the element is visible or not. 
    const isElementVisible = await expect(element).toBeVisible();

    //Check if the element is enabled. 
    const isElementEnabled = await expect(element).toBeEnabled();

    //Check if the element is selected already.  (if the element is checkbox)
    const isElementSelected = await expect(element).toBeChecked();

    //Check if the element is disappeared. 
    const isElementHidden = await expect(element).toBeHidden();

    /* ================================================
             Button Web Element Validations
    ================================================== */

    // Locate the button element
    const button = page.locator('//button[@name="LogIn"]');

    // Verify the label of the button. 
    const buttonText = await button.textContent(); //It will copy the text value from the element. 
    const buttonlabel = await button.getAttribute("value");// It will copy the value from a specific attribute of the element. 
    await expect(buttonText).toBe('LogIn');
    await expect(buttonlabel).toBe('LogIn');

    // Click on the button. 
    await button.click();

    // Double click on the button. 
    await button.dblclick();

    // Right-click on the button. 
    await button.click({ button: 'right' });

    // Mouse hover on the button 
    await button.hover();

    // Scroll till the button is getting displayed and click. 
    await button.scrollIntoViewIfNeeded();

    await page.mouse.wheel(100, 0); //right
    await page.mouse.wheel(0, 100); //left
    await page.mouse.wheel(0, -100); //up
    await page.mouse.wheel(-100, 0); //down

    // Drag and drop the button on the other element. 
    const targetElement = await page.locator('//div[@val="target"]');
    await button.dragTo(targetElement);

    // Force click on the button if the button is not responding or in a disabled state. 
    await button.click({ force: true });

    //When to use force click in our automation? 

    //When the button is not responding or in a disabled state, 
    //but still you want to extract the data from the applications by clicking on that particular button, which is nothing to do with regular end users 

    /* ================================================
             Textbox Web Element Validations
    ================================================== */

    // Locate the button element
    const textbox = page.locator('//input[@name="username"]');

    // Verify the placeholder of the text box. 
    const placeholderText = await textbox.getAttribute("placeholder");

    // Clear the pre-populated text within the text box. 
    await textbox.clear();

    // Type the text into the text box. 
    await textbox.fill("Bharath");

    // Verify the text entered into the text box. 
    const textEntered = await textbox.getAttribute('value');

    // Press the function keys within the text box. 
    await textbox.press('Enter');

    /* ================================================
             Checkbox Web Element Validations
    ================================================== */

    // Locate the checkbox element
    const checkbox = page.locator('//input[@name="agree"]');

    // Check the checkbox only if it is not checked already 
    const checked = await checkbox.isChecked();
    if (!checked) {
        await checkbox.check();
    }

    /* ================================================
             Radiobutton Web Element Validations
    ================================================== */

    // Locate the checkbox element
    const radioButton = page.locator('//input[@name="option"]');

    //Check the radio button
    await radioButton.check();


    /* ================================================
             Dropdown Web Element Validations
    ================================================== */

    // Locate the dropdown element
    const dropdown = page.locator('//select[@name="options"]');

    // Select one of the options from the dropdown. 
    await dropdown.selectOption({ label: 'Web Service' })
    await dropdown.selectOption({ value: 'ws' })
    await dropdown.selectOption({ index: 1 })

    // Verify the option selected from the drop-down. 
    const selectedOption = await dropdown.inputValue();
    await expect(selectedOption).toBe('Web Service');

    // Extract all the options available in the dropdown. 
    const options = await dropdown.locator('option').allTextContents();

    // Verify the drop-down is a multi-select drop-down. 
    const isMultiSelect = await dropdown.getAttribute('multiple');

    //SELECT
    if (isMultiSelect !== null) {
        await dropdown.selectOption({ label: 'Web Service' })
        await dropdown.selectOption({ label: 'JMS' })
    }

    // Perform DESELECT if it is a multi-select drop-down. 
    if (isMultiSelect !== null) {
        await dropdown.selectOption({ label: 'Web Service' })
        await dropdown.selectOption({ label: 'JMS' })
    }

    /* ================================================
             Image Web Element Validations
    ================================================== */
    // Locate the image element
    const image = page.locator('//img[@name="sampleImage"]');

    // Verify the image is displayed within the web page.
    await expect(image).toBeVisible();

    // Verify whether the image is valid by using the source path. 
    const imageSource = await image.getAttribute('src');
    const expPath = "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg";
    await expect(imageSource).toBe(expPath);

    // Verify the position of the image within the application or web page. 
    const imagePosition = await image.boundingBox();
    const x = imagePosition?.x;
    const y = imagePosition?.y;

    // Verify the image size or resolution. 
    const imageResolution = await image.boundingBox();
    const width = imageResolution?.width;
    const height = imageResolution?.height;

    /* ================================================
             Hyperlink Element Validations
    ================================================== */
    // Locate the link element
    const hyperlink = page.locator('//a[@name="sampleImage"]');

    // Verify the hyperlink by using the hyperlink reference value available in the HTML code. 
    const hyperlinkReference = await hyperlink.getAttribute('href');

    //Verify the hyperlink by navigating to the page and getting the URL. 
    await hyperlink.click();
    const currentURL = page.url();
    await expect(currentURL).toBe(hyperlinkReference);

    /* ================================================
            Text / label / Header Element Validations
    ================================================== */

    // Locate the text element
    const textElement = page.locator('//h1[@name="sampleText"]');

    // Verify the text content of the element
    const textContent = await textElement.textContent();
    await expect(textContent).toBe('Sample Text');

    /* ================================================
            Upload Element Validations
    ================================================== */

    // Locate the upload element
    const uploadElement = page.locator('//input[@type="file"]');

    // Upload a file to the element
    await uploadElement.setInputFiles('path/to/file.txt');

    /* ================================================
            Window alert Element Validations
    ================================================== */

    // Locate the alert button element
    const alertButton = page.locator('//button[@name="alertButton"]');

    // If an alert comes, specify the action to be performed 
    page.once('dialog', async dialog => {

        //Copy the message from the alert. 
        const alertMessage = dialog.message();

        //Accept the alert / click on OK button
        await dialog.accept();

        //Dismiss the alert / click on Cancel button
        //await dialog.dismiss();

        //Send the text to the alert text box.
        //await dialog.accept('Text to be sent to the alert text box');
        
    });

    // Click on the alert button to trigger the alert
    await alertButton.click();

    
    /* ================================================
            Frame Element Validations
    ================================================== */

    // Locate the main page element that contains the frame. 
    const frame1 = page.frameLocator('iframe[id="frame1"]');
    const frame2 = page.frameLocator('iframe[id="frame2"]');

    // Locate the frame element within the main page element.
    const frameElement = frame1.locator('h1[value="frameElement"]');


});