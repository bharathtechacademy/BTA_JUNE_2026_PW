import { test, expect } from '@playwright/test';

test('Handling Alerts', async ({ page }) => {

    // 1. Navigate to the page that triggers an alert
    await page.goto('https://demoqa.com/alerts');

    // 2. Locate alert buttons to trigger the alerts. 
    const infoAlert = page.locator('//button[@id="alertButton"]');
    const confirmAlert = page.locator('//button[@id="confirmButton"]');
    const promptAlert = page.locator('//button[@id="promtButton"]');

    // 3. Click on the information alert and copy the alert message, and then click on the OK button. 
    page.once('dialog', async dialog => { //if alert triggers

        //Print the alert message in the console
        console.log(`Alert message: ${dialog.message()}`);

        //Click on the OK button
        await dialog.accept();
    });

    await infoAlert.click();

    //set timeout to wait for 5 sec
    await page.waitForTimeout(5000);

    // 4. Click on the confirmation alert and copy the alert message, and then click on the Cancel button. 
    page.once('dialog', async dialog => { //if alert triggers

        //Print the alert message in the console
        console.log(`Alert message: ${dialog.message()}`);

        //Click on the OK button
        await dialog.dismiss();
    });
    
    await confirmAlert.click();

    // 5. Click on the prompt alert and copy the alert message, and then enter a name in the text box and click on the OK button.
    page.once('dialog', async dialog => { //if alert triggers

        //Print the alert message in the console
        console.log(`Alert message: ${dialog.message()}`);

        //Enter a name in the text box
        await dialog.accept('John Doe');
    });

    await promptAlert.click();

    // 6. take screenshot of the page after handling the alerts
    await page.screenshot({ path: 'files/alert_handling.png' });

});