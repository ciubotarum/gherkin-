const { Given, When, Then } = require('@wdio/cucumber-framework');
const { pages } = require('../../po');

const loginPage = pages('loginPage');

Given('I am on the login page', async () => {
  await loginPage.open();
});

When('I enter invalid credentials', async () => {
  await loginPage.loginForm.login('wrong@email.com', 'wrongPassword');
});

When('I click the login button', async () => {
  await loginPage.loginForm.clickLoginButton();
});

Then('I should see an error message', async () => {
  const errorMessage = await loginPage.loginForm.getErrorMessage();
  expect(errorMessage).to.include('Invalid email or password');
});