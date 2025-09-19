const BaseComponent = require('./BaseComponent');

class CheckoutFormComponent extends BaseComponent {
    get proceedButton1() { return $('[data-test="proceed-1"]'); }
    get proceedButton2() { return $('[data-test="proceed-2"]'); }
    get proceedButton3() { return $('[data-test="proceed-3"]'); }
    get finishButton() { return $('[data-test="finish"]'); }

    get stateInput() { return $('#state'); }
    get postalCodeInput() { return $('#postal_code'); }

    get paymentDropdown() { return $('#payment-method'); }

    get paymentSuccessMessage() { return $('[data-test="payment-success-message"]'); }

    async proceedToLogin() {
        await this.waitAndClick(this.proceedButton1);
    }

    async proceedToPayment() {
        await this.waitAndClick(this.proceedButton2);
    }

    async proceedToConfirmation() {
        await this.waitAndClick(this.proceedButton3);
    }

    async fillBillingAddress(state = 'Test', postalCode = '456878') {
        await this.waitAndSetValue(this.stateInput, state);
        await this.waitAndSetValue(this.postalCodeInput, postalCode);
    }

    async selectPaymentMethod(optionIndex = 2) {
        await this.waitAndClick(this.paymentDropdown);
        const options = await this.paymentDropdown.$$('option');
        await options[optionIndex].click();
    }

    async finishOrder() {
        await this.waitAndClick(this.finishButton);
    }

    async getPaymentSuccessMessage() {
        return await this.waitAndGetText(this.paymentSuccessMessage);
    }
}

module.exports = CheckoutFormComponent;