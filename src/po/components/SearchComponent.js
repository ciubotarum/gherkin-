const BaseComponent = require('./BaseComponent');

class SearchComponent extends BaseComponent {
  get searchInput() {
    return $('#search-query');
  }
  get searchButton() {
    return $('button[type="submit"]');
  }
  get searchResults() {
    return $('[data-test="search_completed"]');
  }

  async enterSearchKeyword(keyword) {
    await this.waitAndSetValue(this.searchInput, keyword);
  }

  async clickSearchButton() {
    await this.waitAndClick(this.searchButton);
  }

  async getSearchResults() {
    await this.searchResults.waitForDisplayed({ timeout: 5000 });
    return await this.searchResults.$$('a.card[data-test^="product-"]');
  }

  async getProductTitles() {
    const products = await this.getSearchResults();
    const titles = [];
    for (const product of products) {
      const title = await product.$('h5[data-test="product-name"]').getText();
      titles.push(title);
    }
    return titles;
  }
}

module.exports = SearchComponent;
