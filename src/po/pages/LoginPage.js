const BasePage = require('./BasePage');
const { LoginForm } = require('../components');

class LoginPage extends BasePage {
  constructor() {
    super('/auth/login');
    this.loginForm = new LoginForm();
  }

  async login(email, password) {
    await this.loginForm.login(email, password);
  }
}

module.exports = LoginPage;
