import { test, expect } from '@playwright/test';

//span[text()="Bookstore services:"]/following-sibling::table[1]//tbody//tr[1]/td[1]
//span[text()="Bookstore services:"]/following-sibling::table[1]//tbody//tr[1]/td[2]

test('Assignment - Parabank', async ({ page }) => {

// 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
// await page.goto("https://parabank.parasoft.com/parabank/index.htm");
let obj = new WebCommons(page);
obj.launchApplication("https://parabank.parasoft.com/parabank/index.htm");

// 2.verify application logo is displayed
const logo = await page.locator('img.logo');
await expect(logo).toBeVisible();

// 3.Verify application caption displayed as "Experience the difference"
const caption = await page.locator('p.caption');
await expect(caption).toHaveText('Experience the difference');

// 4.Enter invalid username
const username = await page.locator('input[name="username"]');
await username.fill('invalidUser');

// 5.Enter empty Password
const password = await page.locator('input[name="password"]')
await password.fill(" ");

// 6.Click on login button
const loginButton = await page.locator('input[value="Log In"]')
await loginButton.click();

// 7.Verify the error message "Please enter a username and password."
const errorMessage = await page.locator('p.error');
await expect(errorMessage).toHaveText('An internal error has occurred and has been logged.');

// 8.Click on admin page link
const adminLink = await page.locator('//a[text()="Admin Page"]');
await adminLink.click();

// 9.select the option "soap" from dba mode radio button
await selectDataAccessMode(page, "soap");

// 10.Scroll to element dropdown
const loanProvider = await page.locator('select[name="loanProvider"]');
await loanProvider.scrollIntoViewIfNeeded();

// 11.Select the option web service from the dropdown
await loanProvider.selectOption({label: 'Web Service'});

// 12.click on submit button
const submitButton = await page.locator('input[value="Submit"]');
await submitButton.click();

// 13.verify submission is successful by validating success message
const successMessage = await page.locator('//b[text()="Settings saved successfully."]');
await expect(successMessage).toBeVisible();

// 14.Click on services page link
const servicesLink = await page.locator('ul[class="leftmenu"] > li > a[href="services.htm"]');
await servicesLink.click();

// 15.wait for service page
const bookStoreServices = await page.locator('//span[text()="Bookstore services:"]');
await expect(bookStoreServices).toBeVisible();

// 16.Scroll down till bookstore services table
await bookStoreServices.scrollIntoViewIfNeeded();

// 17.get total rows of books store services table
const rows = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tbody//tr');
const totalRows = await rows.count();

// 18.get total columns of books store services table
const columns = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tbody//tr[1]//td');
const totalColumns = await columns.count();

// 19.Print table data (row wise and column wise data)
for(let r:number = 1 ; r <=totalRows ; r++){
    for(let c:number = 1; c<= totalColumns ; c++){
        const cell = await page.locator(`//span[text()="Bookstore services:"]/following-sibling::table[1]//tbody//tr[${r}]/td[${c}]`);
        console.log(`Row ${r}  column ${c} Value is : ${await cell.textContent()}`);
    }
}

});

//Select the Data Access Mode. 
async function selectDataAccessMode(page: any, option :string):Promise<void>{

    //Locate the radio button
    const radioButton = await page.locator(`input[value="${option}"]`);

    //click on the radio button
    await radioButton.click();

}