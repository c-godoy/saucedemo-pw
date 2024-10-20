import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
  });

  test('Successfull login to the website', async ({page})=>{
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('No password in the password fill', async ({page})=>{
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#login-button').click();

    await expect(page.locator('css=div>h3')).toHaveText('Epic sadface: Password is required');
    
  });