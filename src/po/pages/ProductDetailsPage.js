const BasePage = require('./BasePage');
const { ProductDetailsComponent } = require('../components');

class ProductDetailsPage extends BasePage {
    constructor() {
        super('/product/'); 
        this.productDetails = new ProductDetailsComponent();
    }

    async waitForPageLoad() {
        await this.productDetails.waitForPageLoad();
    }

    async getProductName() {
        return await this.productDetails.getProductName();
    }

    async addToCart() {
        await this.productDetails.addToCart();
    }

    async getToastMessage() {
        return await this.productDetails.getToastMessage();
    }

    async getPageTitle() {
        return await browser.getTitle(); 
    }
}

module.exports = ProductDetailsPage;