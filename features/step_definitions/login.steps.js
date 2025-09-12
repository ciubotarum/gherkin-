const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');

Given('I am on the login page', async () => {
  await browser.url('https://practicesoftwaretesting.com/auth/login');
});

When('I enter invalid credentials', async () => {
  const email = await $('#email');
  const password = await $('#password');
  await email.setValue('wrong@email.com');
  await password.setValue('wrongPassword');
});

When('I click the login button', async () => {
  const loginBtn = await $('input.btnSubmit');
  await loginBtn.click();
});

Then('I should see an error message', async () => {
  const errorMessage = await $('div.help-block');
  await errorMessage.waitForDisplayed({ timeout: 5000 });

  const text = await errorMessage.getText();
  expect(text).to.include('Invalid email or password');
});