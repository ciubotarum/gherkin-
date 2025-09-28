const { Given, When, Then } = require('@wdio/cucumber-framework');
const { pages } = require('../../po');

const mainPage = pages('mainPage');

Given('I am on the main page looking to filter products', async () => {
  await mainPage.open();
});

When('I select a "Hammer" category', async () => {
  await mainPage.filter.selectCategoryFilter(0);
  await mainPage.filter.waitForFilteredProductCount(7);
});

Then('only seven products should be displayed in the filtered results', async () => {
  const productCount = await mainPage.filter.getFilteredProductCount();
  expect(productCount).to.equal(7);
});

Then('filter by brand "MightyCraft Hardware"', async () => {
  await mainPage.filter.selectBrandFilter(1);
});

Then('only 1 product should be displayed in the filtered results', async () => {
  const productCount = await mainPage.filter.getFilteredProductCount();
  expect(productCount).to.equal(1);
});
