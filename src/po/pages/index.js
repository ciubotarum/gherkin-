const LoginPage = require('./LoginPage');
const MainPage = require('./MainPage');
const ProductDetailsPage = require('./ProductDetailsPage');
const CategoryPage = require('./CategoryPage');
const CheckoutPage = require('./CheckoutPage');

function pages(name) {
  const items = {
    loginPage: new LoginPage(),
    mainPage: new MainPage(),
    productDetailsPage: new ProductDetailsPage(),
    categoryPage: new CategoryPage(),
    checkoutPage: new CheckoutPage(),
  };

  return items[name];
}

module.exports = {
  LoginPage,
  MainPage,
  ProductDetailsPage,
  CategoryPage,
  CheckoutPage,
  pages,
};
