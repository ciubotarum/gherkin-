const BaseComponent = require('./BaseComponent');

class LoginForm extends BaseComponent {
    get emailInput() { return $('#email'); }
    get passwordInput() { return $('#password'); }
    get submitButton() { return $('input.btnSubmit'); }
    get errorMessage() { return $('div.help-block'); }

    async waitForForm() {
        await this.emailInput.waitForDisplayed({ timeout: 5000 });
        await this.passwordInput.waitForDisplayed({ timeout: 5000 });
        await this.submitButton.waitForDisplayed({ timeout: 5000 });
    }

    async login(email, password) {
        await this.waitForForm();
        await this.waitAndSetValue(this.emailInput, email);
        await this.waitAndSetValue(this.passwordInput, password);
    }

    async clickLoginButton() {
        await this.waitAndClick(this.submitButton);
    }

    async getErrorMessage() {
        return await this.waitAndGetText(this.errorMessage);
    }
}

module.exports = LoginForm;