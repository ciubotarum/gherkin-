const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the login page', async () => {
  await browser.url('https://practicesoftwaretesting.com/auth/login');
});

When('I enter valid credentials', async () => {
  const email = await $('#email');
  const password = await $('#password');
  await email.setValue('john@email.com'); 
  await password.setValue('John@email.com1');     
});

When('I click the login button', async () => {
  const loginBtn = await $('input.btnSubmit');
  await loginBtn.click();
});

Then('I should see my account page', async () => {
  await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/account');
  await expect(browser).toHaveTitle('Overview - Practice Software Testing - Toolshop - v5.0');
});