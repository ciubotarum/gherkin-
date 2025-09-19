const BasePage = require('./BasePage');
const { CheckoutFormComponent, LoginForm } = require('../components');
class CheckoutPage extends BasePage {
    constructor() {
        super('https://practicesoftwaretesting.com/checkout');
        this.checkoutForm = new CheckoutFormComponent();
        this.loginForm = new LoginForm();
    }

    async loginWithValidCredentials(email = 'customer@practicesoftwaretesting.com', password = 'welcome01') {
        await this.loginForm.login(email, password);
        await this.loginForm.clickLoginButton();
        await browser.pause(1000);
        await this.checkoutForm.proceedButton2.waitForDisplayed({ timeout: 10000 });
    }
}

module.exports = CheckoutPage;