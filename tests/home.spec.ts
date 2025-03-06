import { test, expect } from '@playwright/test';

test('Home page', async ({ page }) => {
await page.goto('https://practicesoftwaretesting.com/');
  
//Ensure the sign-in link is present 


//check the title of the page
//console.log(await page.title());
await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0');

//check the count of item displayed


//Search for Thor Hammer and check the result
await page.getByPlaceholder("Search").fill('Thor Hammer');
await page.getByRole('button', {name: "Search"}).click();
//await expect(page.locator('[data-test="product-01JNNN7PZZ0F3GDBXMZ2WKXPT8"]'));

// const ProductGrid = await expect(page.locator('.col-md-9'));
// await ProductGrid.tohave


});

