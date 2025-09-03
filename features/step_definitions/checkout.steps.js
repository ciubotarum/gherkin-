const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');

Given('I am on the main page to find a product', async () => {
  await browser.url('https://practicesoftwaretesting.com/');
});

When('I add a product to the cart', async () => {
  await browser.waitUntil(async () => {
    const products = await $$('[data-test^="product-"]');
    return products.length > 0;
  }, {
    timeout: 10000,
    timeoutMsg: 'Expected at least one product to appear'
  });

  const products = await $$('[data-test^="product-"]');
  const firstProduct = products[0];
  await firstProduct.scrollIntoView();
  await firstProduct.waitForDisplayed({ timeout: 5000 });
  await firstProduct.click();

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

  await browser.pause(500);

  const stateInput = await $('#state');
  await stateInput.waitForEnabled({ timeout: 5000 });
  await stateInput.click();
  await stateInput.setValue('Test');

  const postalCodeInput = await $('#postal_code');
  await postalCodeInput.waitForEnabled({ timeout: 5000 });
  await postalCodeInput.click();
  await postalCodeInput.setValue('456878');
});

When('I click the proceed button on the payment form', async () => {
  const proceedBtn = await $('[data-test="proceed-3"]');
  await proceedBtn.waitForExist({ timeout: 10000 });
  await proceedBtn.waitForDisplayed({ timeout: 10000 });

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
  console.log('Order success message:', msgText);

  expect(msgText.trim()).to.include('Payment was successful');
});