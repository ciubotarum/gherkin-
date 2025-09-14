const BasePage = require('./BasePage');

class CategoryPage extends BasePage {
    constructor() {
        super(''); 
    }

    get pageTitle() { return $('[data-test="page-title"]'); }

    async waitForPageLoad() {
        await this.pageTitle.waitForDisplayed({ timeout: 5000 });
    }

    async getPageTitle() {
        return await this.waitAndGetText(this.pageTitle);
    }

    async getCurrentUrl() {
        return await browser.getUrl();
    }
}

module.exports = CategoryPage;