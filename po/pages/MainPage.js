const BasePage = require('./BasePage');
const SearchComponent = require('../components/SearchComponent');
const ProductListComponent = require('../components/ProductListComponent');
const NavigationComponent = require('../components/NavigationComponent');
const FilterComponent = require('../components/FilterComponent');

class MainPage extends BasePage {
    constructor() {
        super('https://practicesoftwaretesting.com/');
        this.search = new SearchComponent();
        this.productList = new ProductListComponent();
        this.navigation = new NavigationComponent();
        this.filter = new FilterComponent();
    }

    async waitForPageLoad() {
        await super.waitForPageLoad();
        await this.productList.waitForProducts();
    }
}

module.exports = MainPage;