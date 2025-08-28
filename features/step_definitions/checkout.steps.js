const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the main page to find a product', async () => {
  await browser.url('https://practicesoftwaretesting.com/');
});

When('I add a product to the cart', async () => {
  const containers = await $$('div.container');
  const thirdContainer = containers[2];
  const productLinks = await thirdContainer.$$('a');
  await productLinks[0].click();
  const addToCartBtn = await $('#btn-add-to-cart');
  await addToCartBtn.waitForClickable({ timeout: 5000 });
  await addToCartBtn.click();
  const toast = await $('#toast-container');
  await toast.waitForDisplayed({ timeout: 5000 });
});

When('I go to the checkout page', async () => {
  await browser.url('https://practicesoftwaretesting.com/checkout');
});

When('I click the proceed button', async () => {
  const proceedBtn = await $('[data-test="proceed-1"]');
  await proceedBtn.waitForClickable({ timeout: 5000 });
  await proceedBtn.click();
});

When('I log in with valid credentials', async () => {
  const emailInput = await $('#email');
  await emailInput.setValue('customer@practicesoftwaretesting.com');
  const passwordInput = await $('#password');
  await passwordInput.setValue('welcome01');
  const loginBtn = await $('input.btnSubmit');
  await loginBtn.click();
  await $('[data-test="proceed-2"]').waitForDisplayed({ timeout: 5000 });
});

When('I click the proceed button on the address form', async () => {
  const proceedBtn = await $('[data-test="proceed-2"]');
  await proceedBtn.waitForClickable({ timeout: 5000 });
  await proceedBtn.click();
});

When('I fill in the billing address', async () => {
  const stateInput = await $('#state');
  await stateInput.setValue('Test');
  const postalCodeInput = await $('#postal_code');
  await postalCodeInput.setValue('456878');
});

When('I click the proceed button on the payment form', async () => {
  const proceedBtn = await $('[data-test="proceed-3"]');
  await proceedBtn.waitForClickable({ timeout: 5000 });
  await proceedBtn.click();
});

When('I select the third payment method', async () => {
  const paymentDropdown = await $('#payment-method');
  await paymentDropdown.waitForDisplayed({ timeout: 5000 });
  await paymentDropdown.click();
  const options = await paymentDropdown.$$('option');
  await options[2].click(); 
});

When('I confirm the order', async () => {
  const confirmBtn = await $('[data-test="finish"]');
  await confirmBtn.waitForClickable({ timeout: 5000 });
  await confirmBtn.click();
});

Then('a payment success message should appear', async () => {
  const successMsg = await $('[data-test="payment-success-message"]');
  await successMsg.waitForDisplayed({ timeout: 5000 });
});

Then('I click the finish button', async () => {
  const finishBtn = await $('[data-test="finish"]');
  await finishBtn.waitForClickable({ timeout: 5000 });
  await finishBtn.click();
});

Then('an order success message should appear', async () => {
  const orderSuccessMsg = await $('[data-test="payment-success-message"]');
  await orderSuccessMsg.waitForDisplayed({ timeout: 5000 });
  const msgText = await orderSuccessMsg.getText();
  expect(msgText).toBe('Payment was successful');
});