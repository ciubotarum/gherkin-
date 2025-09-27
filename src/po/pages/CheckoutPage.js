const BasePage = require('./BasePage');
const { CheckoutFormComponent, LoginForm } = require('../components');

class CheckoutPage extends BasePage {
    constructor() {
        super('/checkout'); 
        this.checkoutForm = new CheckoutFormComponent();
        this.loginForm = new LoginForm();
    }

    async loginWithValidCredentials(email = 'customer@practicesoftwaretesting.com', password = 'welcome01') {
        await this.loginForm.login(email, password);
        await this.loginForm.clickLoginButton();
        await browser.pause(3000);
    }
}

module.exports = CheckoutPage;