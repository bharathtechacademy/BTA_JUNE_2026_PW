import { test , expect } from '@playwright/test';

test('Test Case 1', { tag: '@smoke' }, async ({ page }) => {
    console.log("This is Test Case 1");
});

test('Test Case 2', { tag: '@regression' }, async ({ page }) => {
    console.log("This is Test Case 2");
    
});

test('Test Case 3', { tag: '@smoke' }, async ({ page }) => {
    console.log("This is Test Case 3");
});

test('Test Case 4', { tag: ['@regression', '@smoke','@sanity'] }, async ({ page }) => {
    console.log("This is Test Case 4");
});