const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the main page looking for products', async () => {
  await browser.url('https://practicesoftwaretesting.com/');
});

When('I click the first product', async () => {
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

Then('I should be redirected to the product details page', async () => {
  await $('h1[data-test="product-name"]').waitForDisplayed({ timeout: 5000 });
});

Then('the page title should be the product name followed by " - Practice Software Testing - Toolshop - v5.0"', async () => {
  const productTitle = await $('h1[data-test="product-name"]').getText();
  const expectedTitle = `${productTitle} - Practice Software Testing - Toolshop - v5.0`;
  const actualTitle = await browser.getTitle();
  actualTitle.should.equal(expectedTitle);
});