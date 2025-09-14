const BasePage = require('./BasePage');

class ProductDetailsPage extends BasePage {
    constructor() {
        super('');
    }

    get productName() { return $('h1[data-test="product-name"]'); }
    get addToCartButton() { return $('#btn-add-to-cart'); }
    get toast() { return $('#toast-container'); }

    async waitForPageLoad() {
        await this.productName.waitForDisplayed({ timeout: 5000 });
    }

    async getProductName() {
        return await this.waitAndGetText(this.productName);
    }

    async addToCart() {
        await this.waitAndClick(this.addToCartButton);
        await this.toast.waitForDisplayed({ timeout: 5000 });
    }

    async getToastMessage() {
        await this.toast.waitForDisplayed({ timeout: 5000 });
        return await this.waitAndGetText(this.toast);
    }

    async getPageTitle() {
        return await browser.getTitle();
    }
}

module.exports = ProductDetailsPage;