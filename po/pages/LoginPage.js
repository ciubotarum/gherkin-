const BasePage = require('./BasePage');
const LoginForm = require('../components/LoginForm');

class LoginPage extends BasePage {
    constructor() {
        super('https://practicesoftwaretesting.com/auth/login');
        this.loginForm = new LoginForm();
    }

    async waitForPageLoad() {
        await super.waitForPageLoad(); 
        await this.loginForm.waitForForm();
    }

    async login(email, password) {
        await this.loginForm.login(email, password);
    }
}

module.exports = LoginPage;