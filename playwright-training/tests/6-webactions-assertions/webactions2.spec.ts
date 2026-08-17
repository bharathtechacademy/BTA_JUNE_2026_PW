import { test, expect } from '@playwright/test';

test('Assignment - Demo QA', async ({ page }) => {

    // 1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
    await page.goto('https://demoqa.com/automation-practice-form');

    // 2. Wait for Page-load
    const pageHeader = await page.locator('//h1[text()="Practice Form"]');
    await expect(pageHeader).toBeVisible();

    // 3. Enter First name and Last name
    const firstName = await page.locator('//input[@id="firstName"]');
    const lastName = await page.locator('//input[@id="lastName"]');

    await firstName.fill("Bharath");
    await lastName.fill("Reddy");

    // 4. Enter Email
    const email = await page.locator('//input[@id="userEmail"]');
    await email.fill("bharath.reddy@example.com");

    // 5. Select Gender (Male)
    await selectGender(page, "Male");

    // 6. Enter mobile number
    const mobileNumber = await page.locator('//input[@id="userNumber"]');
    await mobileNumber.fill("1234567890");

    // 7.Select DOB (1-Feb-1991)
    await selectDOB(page, "1", "February", "1991");

    // 8.Search and Select Computer Science and English
    let subjects = ["Computer Science", "English"];
    await selectSubjects(page, subjects);

    // 9.Select Hobbies as Sports and Reading
    let hobbies = ["Sports", "Reading"];
    await selectHobbies(page, hobbies);

    // 10.Upload photo
    const uploadPhoto = await page.locator('//input[@id="uploadPicture"]');
    const filePath = 'files/photo.png';
    await uploadPhoto.setInputFiles(filePath);

    // 11.Submit Details
    const submitButton = await page.locator('//button[@id="submit"]');
    await submitButton.click();

});

async function selectHobbies(page: any, hobbies: string[]) {
    for (const hobby of hobbies) {
        const hobbyLocator = await page.locator(`//label[text()="${hobby}"]`);
        await hobbyLocator.click({force: true});
    }
}
async function selectSubjects(page: any, subjects: string[]) {

    // Locate the Subject input box and click on it. 
    const subjectInput = await page.locator('//div [contains(@class,"subjects-auto-complete__input-container")]');
    subjectInput.click();

    //Locate the subjects suggestion box. 
    const suggestionBox = await page.locator('//input[@class="subjects-auto-complete__input"]');

    for (const subject of subjects) {
        
        // Type the subject name inside the subject suggestion box. 
        await suggestionBox.fill(subject);

        // Wait for the suggestion and then press the Enter button. 
        await suggestionBox.press('Enter');
    }

}

async function selectGender(page: any, gender: string) {
    const genderLocator = await page.locator(`//input[@value="${gender}"]`);
    await genderLocator.check();
}

async function selectDOB(page: any, date: string , month: string, year: string) {

    // Click on the date of birth field and launch the calendar. 
    const dobField = await page.locator('//input[@id="dateOfBirthInput"]');
    await dobField.click();

    //Select the month from the month dropdown. 
    const monthDropdown = await page.locator('//select[@class="react-datepicker__month-select"]');
    await monthDropdown.selectOption({ label: month });

    //Select the year from the year dropdown. 
    const yearDropdown = await page.locator('//select[@class="react-datepicker__year-select"]');
    await yearDropdown.selectOption({ label: year });

    //Select the date from the calendar. 
    const dateLocator = await page.locator(`//div [text()="${date}"  and  contains(@aria-label,"${month}")]`);
    await dateLocator.click();

}