import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('Add a product to the cart', async ({page})=>{
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await expect(page.locator('css=#shopping_cart_container>a>span')).toHaveText('1');
  });
