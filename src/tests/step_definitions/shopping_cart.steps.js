const { Given, When, Then } = require('@wdio/cucumber-framework');
const { pages } = require('../../po');

const mainPage = pages('mainPage');
const productDetailsPage = pages('productDetailsPage');

Given('I am on the main page to test the shopping cart functionality', async () => {
  await mainPage.open();
});

When('I click on a product', async () => {
  await mainPage.productList.clickFirstProduct();
});

When('I click the add to cart button', async () => {
  await productDetailsPage.addToCart();
});

Then('a success toast should appear with the correct message', async () => {
  const toastText = await productDetailsPage.getToastMessage();
  expect(toastText).to.include('Product added to shopping cart.');
});
