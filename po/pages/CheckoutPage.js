const BasePage = require('./BasePage');
const CheckoutFormComponent = require('../components/CheckoutFormComponent');
const LoginForm = require('../components/LoginForm');

class CheckoutPage extends BasePage {
    constructor() {
        super('https://practicesoftwaretesting.com/checkout');
        this.checkoutForm = new CheckoutFormComponent();
        this.loginForm = new LoginForm();
    }

    async waitForPageLoad() {
        await super.waitForPageLoad();
        await this.checkoutForm.proceedButton1.waitForDisplayed({ timeout: 5000 });
    }

    async loginWithValidCredentials(email = 'customer@practicesoftwaretesting.com', password = 'welcome01') {
        await this.loginForm.login(email, password);
        await this.loginForm.clickLoginButton();
        await browser.pause(1000);
        await this.checkoutForm.proceedButton2.waitForDisplayed({ timeout: 10000 });
    }
}

module.exports = CheckoutPage;