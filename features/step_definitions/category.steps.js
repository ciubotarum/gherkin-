const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the main page looking for Hand Tools', async () => {
  await browser.url('https://practicesoftwaretesting.com/');
});

When('I click the main categories button in the header', async () => {
  const categoriesBtn = await $('a[data-test="nav-categories"]');
  await categoriesBtn.click();
});

When('I select the "Hand Tools" category from the dropdown', async () => {
  const handToolsLink = await $('a[data-test="nav-hand-tools"]');
  await handToolsLink.waitForDisplayed({ timeout: 5000 });
  await handToolsLink.click();
});

Then('I should be redirected to the Hand Tools category page', async () => {
  await browser.waitUntil(
    async () => (await browser.getUrl()) === 'https://practicesoftwaretesting.com/category/hand-tools',
    { timeout: 5000, timeoutMsg: 'Did not redirect to Hand Tools category page' }
  );
});

Then('the page title should be "Category: Hand Tools"', async () => {
  const pageTitle = await $('[data-test="page-title"]');
  await pageTitle.waitForDisplayed({ timeout: 5000 });
  const text = await pageTitle.getText();
  expect(text).toBe('Category: Hand Tools');
});