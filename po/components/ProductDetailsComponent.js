const BaseComponent = require('./BaseComponent');

class ProductDetailsComponent extends BaseComponent {
    get productName() { return $('h1[data-test="product-name"]'); }
    get addToCartButton() { return $('#btn-add-to-cart'); }
    get toast() { return $('#toast-container'); }

    async getProductName() {
        return await this.waitAndGetText(this.productName);
    }

    async addToCart() {
        await this.waitAndClick(this.addToCartButton);
        await this.toast.waitForDisplayed({ timeout: 5000 });
    }

    async getToastMessage() {
        return await this.waitAndGetText(this.toast);
    }

    async waitForPageLoad() {
        await this.productName.waitForDisplayed({ timeout: 5000 });
    }
}

module.exports = ProductDetailsComponent;