const { Given, When, Then } = require('@wdio/cucumber-framework');
const { pages } = require('../../po');

const mainPage = pages('mainPage');

Given('I am on the main page to change the language', async () => {
  await mainPage.open();
});

When('I click the language button', async () => {
  await mainPage.navigation.clickLanguage();
});

Then('a list of languages should appear', async () => {
  const isVisible = await mainPage.navigation.isLanguageDropdownVisible();
  expect(isVisible).to.be.true;
});

Then('the list should contain 6 languages', async () => {
  const languages = await mainPage.navigation.getLanguageList();
  assert.lengthOf(languages, 6);
});

When('I select the first language from the list', async () => {
  await mainPage.navigation.selectLanguage(0);
});

Then('the site language should change accordingly', async () => {
  const currentLanguage = await mainPage.navigation.getCurrentLanguage();
  assert.equal(currentLanguage, 'DE');
});
