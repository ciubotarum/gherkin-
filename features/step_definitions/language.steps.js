const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the main page to change the language', async () => {
  await browser.url('https://practicesoftwaretesting.com/');
});

When('I click the language button', async () => {
  const langBtn = await $('#language');
  await langBtn.waitForClickable({ timeout: 5000 });
  await langBtn.click();
});

Then('a list of languages should appear', async () => {
  const dropdown = await $('#dropdown-animated');
  await dropdown.waitForDisplayed({ timeout: 5000 });
});

Then('the list should contain 6 languages', async () => {
  const languages = await browser.$$('#dropdown-animated li');
  assert.lengthOf(languages, 6);
});

When('I select the first language from the list', async () => {
  const languages = await browser.$$('#dropdown-animated li');
  await languages[0].click();
});

Then('the site language should change accordingly', async () => {
  const heading = await $('#language');

  const text = await heading.getText();
  assert.equal(text, 'DE');
});