// Hooks are nothing but the special functions provided by Playwright that will run before and after each and every test case that we are going to add. 

//Playwright: mainly, we have four different types of hooks. 

//1. beforeAll() : This hook is used to execute the code before the execution of all the test cases. 
//2. afterAll() : This hook is used to execute the code after the execution of all the test cases.
//3. beforeEach() : This hook is used to execute the code before the execution of each test case.
//4. afterEach() : This hook is used to execute the code after the execution of each test case.


import { test } from '@playwright/test';


//Group of test cases
test.describe('Group 1',async () => {

    test('Test Case 1 - Group 1', async ({ page }) => {
        console.log("This is Test Case 1 in Group 1");
    });

    test('Test Case 2 - Group 1', async ({ page }) => {
        console.log("This is Test Case 2 in Group 1");
    });

    test('Test Case 3 - Group 1', async ({ page }) => {
        console.log("This is Test Case 3 in Group 1");
    });

});

test.describe('Group 2', () => {

    test.beforeAll(async () => {
        console.log("This is BEFORE ALL hook");
    });

    test.afterAll(async () => {
        console.log("This is AFTER ALL hook");
    });

    test.beforeEach(async () => {
        console.log("This is BEFORE EACH hook");
    }); 

    test.afterEach(async () => {
        console.log("This is AFTER EACH hook");
    });

    test('Test Case 1 - Group 2', async ({ page }) => {
        console.log("This is Test Case 1 in Group 2");
    });

    test('Test Case 2 - Group 2', async ({ page }) => {
        console.log("This is Test Case 2 in Group 2");
    });

    test('Test Case 3 - Group 2', async ({ page }) => {
        console.log("This is Test Case 3 in Group 2");
    });

});
