const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the main page to test the shopping cart functionality', async () => {
  await browser.url('https://practicesoftwaretesting.com/');
});

When('I click on a product', async () => {
  await browser.waitUntil(async () => {
    const products = await $$('a[href*="/product/"]');
    return products.length > 0;
  }, {
    timeout: 10000,
    timeoutMsg: 'Expected at least one product link to appear'
  });

  const productLinks = await $$('a[href*="/product/"]');

  await productLinks[0].waitForClickable({ timeout: 5000 });
  await productLinks[0].click();
});

When('I click the add to cart button', async () => {
  const addToCartBtn = await $('#btn-add-to-cart');
  await addToCartBtn.waitForClickable({ timeout: 5000 });
  await addToCartBtn.click();
});

Then('a success toast should appear with the correct message', async () => {
  const toast = await $('#toast-container');
  await toast.waitForDisplayed({ timeout: 5000 });
  const toastText = await toast.getText();
  expect(toastText).toContain('Product added to shopping cart.');
});