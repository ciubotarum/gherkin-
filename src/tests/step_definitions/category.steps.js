const { Given, When, Then } = require('@wdio/cucumber-framework');
const { pages } = require('../../po');

const mainPage = pages('mainPage');
const categoryPage = pages('categoryPage');

Given('I am on the main page looking for Hand Tools', async () => {
  await mainPage.open();
});

When('I click the main categories button in the header', async () => {
  await mainPage.navigation.clickCategories();
});

When('I select the "Hand Tools" category from the dropdown', async () => {
  await mainPage.navigation.selectHandTools();
});

Then('I should be redirected to the Hand Tools category page', async () => {
  await browser.waitUntil(
    async () => (await categoryPage.getCurrentUrl()) === 'https://practicesoftwaretesting.com/category/hand-tools',
    { timeout: 5000, timeoutMsg: 'Did not redirect to Hand Tools category page' }
  );
});

Then('the page title should be "Category: Hand Tools"', async () => {
  await categoryPage.waitForPageLoad();
  const text = await categoryPage.getPageTitle();
  expect(text).to.equal('Category: Hand Tools');
});