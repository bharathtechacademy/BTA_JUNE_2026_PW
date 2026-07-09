console.log(2+2);

test.describe('Test', () => {
  test('Test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });
});