//Annotations : Annotations are a set of keywords and default methods that will help us to run all our test cases. 

//test => This refers to an independent test method to be executed by Playwright. 
//test.describe => test.describe Represents a group of test cases to be executed by Playwright together .

//test.only() => This annotation will be used to run only specific test cases and skip all other test cases. 
//test.skip() => This annotation will be used to skip specific test cases and run all other test cases.
//test.fixme() => This annotation will be used to mark specific test cases that need to be fixed. 
//test.fail() => This annotation will be used for the test cases that we are expecting to fail. 
//test.slow() => This annotation is going to represent slow test cases, meaning normal test cases. Playwright is going to wait for 30 seconds, but whenever we are going to mention slow, 
// it is going to increase the wait time by three times. 
 
import { test , expect } from '@playwright/test';

test.fail('Test Case 1', async ({ page }) => {
    console.log("This is Test Case 1");
    expect(1).toBe(2); //Verify 1 is equal to 1.
});

test('Test Case 2', async ({ page }) => {
    test.slow(); //This is going to mark this test case as slow test case.
    console.log("This is Test Case 2");
    await new Promise(resolve => setTimeout(resolve, 32000)); //Wait for 32 seconds
    console.log("Execution completed after waiting for 32 seconds");
});

test('Test Case 3', async ({ page }) => {
    console.log("This is Test Case 3");
});