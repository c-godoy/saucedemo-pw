import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('To check the filters ordered ascendent', async ({page})=>{
    await page.locator('.product_sort_container').click();
    await page.locator('select').selectOption({ value: 'za' });

    const productsList = await page.locator('css=.inventory_item>div>div>a').allTextContents();

    const sortedElements = [...productsList].sort((a, b) => b.localeCompare(a));

    await expect(productsList).toEqual(sortedElements);
  });