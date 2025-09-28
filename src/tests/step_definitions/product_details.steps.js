const { Given, When, Then } = require('@wdio/cucumber-framework');
const { pages } = require('../../po');

const mainPage = pages('mainPage');
const productDetailsPage = pages('productDetailsPage');

Given('I am on the main page looking for products', async () => {
  await mainPage.open();
});

When('I click the first product', async () => {
  await mainPage.productList.clickFirstProduct();
});

Then('I should be redirected to the product details page', async () => {
  await productDetailsPage.waitForPageLoad();
});

Then(
  'the page title should be the product name followed by " - Practice Software Testing - Toolshop - v5.0"',
  async () => {
    const productTitle = await productDetailsPage.getProductName();
    const expectedTitle = `${productTitle} - Practice Software Testing - Toolshop - v5.0`;
    const actualTitle = await productDetailsPage.getPageTitle();
    actualTitle.should.equal(expectedTitle);
  },
);
