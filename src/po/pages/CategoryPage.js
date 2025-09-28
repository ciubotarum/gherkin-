const BasePage = require('./BasePage');

class CategoryPage extends BasePage {
  get pageTitle() {
    return $('[data-test="page-title"]');
  }

  async getPageTitle() {
    return await this.pageTitle.getText();
  }

  async getCurrentUrl() {
    return await browser.getUrl();
  }
}

module.exports = CategoryPage;
