const BaseComponent = require('./BaseComponent');

class FilterComponent extends BaseComponent {
    get categoryFilters() { return $$('div.checkbox div.checkbox input.icheck[name="category_id"]'); }
    get brandFilters() { return $$('input[name="brand_id"]'); }
    get filterResults() { return $('[data-test="filter_completed"]'); }

    async selectCategoryFilter(index = 0) {
        await this.waitAndClick(await this.categoryFilters[index]);
    }

    async selectBrandFilter(index) {
        await this.waitAndClick(await this.brandFilters[index]);
    }

    async getFilteredProducts() {
        await this.filterResults.waitForDisplayed({ timeout: 5000 });
        return await this.filterResults.$$('a.card[data-test^="product-"]');
    }

    async getFilteredProductCount() {
        const products = await this.getFilteredProducts();
        return products.length;
    }

    async waitForFilteredProductCount(expectedCount, timeout = 5000) {
        await browser.waitUntil(
            async () => {
                const products = await this.getFilteredProducts();
                return products.length === expectedCount;
            },
            {
                timeout,
                timeoutMsg: `Expected ${expectedCount} products but did not see it within ${timeout}ms`
            }
        );
    }
}

module.exports = FilterComponent;