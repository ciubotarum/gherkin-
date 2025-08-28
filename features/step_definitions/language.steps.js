const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the main page to change the language', async () => {
  await browser.url('https://practicesoftwaretesting.com/');
});

When('I click the language button', async () => {
  const langBtn = await $('#language');
  await langBtn.click();
});

Then('a list of languages should appear', async () => {
  const dropdown = await $('#dropdown-animated');
  await dropdown.waitForDisplayed({ timeout: 5000 });
});

Then('the list should contain 6 languages', async () => {
  const languages = await $$('#dropdown-animated li');
  expect(languages.length).toBe(6);
});

When('I select the first language from the list', async () => {
  const languages = await $$('#dropdown-animated li');
  await languages[0].click();
});

Then('the site language should change accordingly', async () => {
  const heading = await $('#language');

  const text = await heading.getText();
  expect(text).toBe('DE');
});