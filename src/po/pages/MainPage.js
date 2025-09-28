const BasePage = require('./BasePage');
const {
  SearchComponent,
  ProductListComponent,
  NavigationComponent,
  FilterComponent,
} = require('../components');
class MainPage extends BasePage {
  constructor() {
    super('/');
    this.search = new SearchComponent();
    this.productList = new ProductListComponent();
    this.navigation = new NavigationComponent();
    this.filter = new FilterComponent();
  }
}

module.exports = MainPage;
