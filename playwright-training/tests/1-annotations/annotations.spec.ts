//Annotations : Annotations are a set of keywords and default methods that will help us to run all our test cases. 

//test => This refers to an independent test method to be executed by Playwright. 
//test.describe => test.describe Represents a group of test cases to be executed by Playwright together .

//test.only()
//test.skip()
//test.fixme()
//test.fail()
//test.slow()

import { test } from '@playwright/test';

//Independent test case
test('Independent Test Case ', async ({ page }) => {
    console.log("This is an independent test case");    
});

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

