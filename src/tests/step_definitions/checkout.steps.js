const { Given, When, Then } = require('@wdio/cucumber-framework');
const { pages } = require('../../po');

const mainPage = pages('mainPage');
const productDetailsPage = pages('productDetailsPage');
const checkoutPage = pages('checkoutPage');

Given('I am on the main page to find a product', async () => {
  await mainPage.open();
});

When('I add a product to the cart', async () => {
  await mainPage.productList.clickProductByIndex(0);
  await productDetailsPage.addToCart();
});

When('I go to the checkout page', async () => {
  await checkoutPage.open();
});

When('I click the proceed button', async () => {
  await checkoutPage.checkoutForm.proceedToLogin();
});

When('I log in with valid credentials', async () => {
  await checkoutPage.loginWithValidCredentials();
});

When('I click the proceed button on the address form', async () => {
  await checkoutPage.checkoutForm.proceedToPayment();
});

When('I fill in the billing address', async () => {
  await checkoutPage.checkoutForm.fillBillingAddress();
});

When('I click the proceed button on the payment form', async () => {
  await checkoutPage.checkoutForm.proceedToConfirmation();
});

When('I select the third payment method', async () => {
  await checkoutPage.checkoutForm.selectPaymentMethod(2);
});

When('I confirm the order', async () => {
  await checkoutPage.checkoutForm.finishOrder();
});

Then('a payment success message should appear', async () => {
  const successMsg = await checkoutPage.checkoutForm.paymentSuccessMessage;
  await successMsg.waitForDisplayed({ timeout: 5000 });
});

Then('I click the finish button', async () => {
  await checkoutPage.checkoutForm.finishOrder();
});

Then('an order success message should appear', async () => {
  const msgText = await checkoutPage.checkoutForm.getPaymentSuccessMessage();

  expect(msgText.trim()).to.include('Payment was successful');
});