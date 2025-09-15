const BaseComponent = require('./BaseComponent');

class FilterComponent extends BaseComponent {
    get categoryFilters() { return $$('div.checkbox div.checkbox input.icheck[name="category_id"]'); }
    get brandFilters() { return $$('input[name="brand_id"]'); }
    get filterResults() { return $('[data-test="filter_completed"]'); }

    async selectCategoryFilter(index = 0) {
        const filters = await this.categoryFilters;
        await this.waitAndClick(filters[index]);
    }

    async selectBrandFilter(index) {
        const filters = await this.brandFilters;
        await this.waitAndClick(filters[index]);
    }

    async getFilteredProducts() {
        await this.filterResults.waitForDisplayed({ timeout: 5000 });
        return await this.filterResults.$$('a.card[data-test^="product-"]');
    }

    async getFilteredProductCount() {
        const products = await this.getFilteredProducts();
        return products.length;
    }
}

module.exports = FilterComponent;