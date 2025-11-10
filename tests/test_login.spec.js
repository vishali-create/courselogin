// tests/test_login.spec.js
const { test, expect } = require('@playwright/test');

test('Login and navigate to home page', async ({ page }) => {
  // Serve local files using file://
  await page.goto(`file://${process.cwd()}/login.html`);

  // Enter credentials
  await page.fill('#username', 'vishali');
  await page.fill('#password', 'arora@123');
  await page.click('button[type="submit"]');

  // Check redirected to home.html
  await expect(page).toHaveURL(/home\.html/);
  await expect(page.locator('h1')).toHaveText('Welcome, Vishali! 🎉');

  // Click logout
  await page.click('button');
  await expect(page).toHaveURL(/login\.html/);
});

