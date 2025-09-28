const BaseComponent = require('./BaseComponent');

class ProductListComponent extends BaseComponent {
  get products() {
    return $$('[data-test^="product-"]');
  }
  get productLinks() {
    return $$('a[href*="/product/"]');
  }

  async waitForProducts() {
    await browser.waitUntil(
      async () => {
        const products = await this.products;
        return products.length > 0;
      },
      {
        timeout: 10000,
        timeoutMsg: 'Expected at least one product to appear',
      },
    );
  }

  async clickFirstProduct() {
    await this.waitForProducts();
    const productLinks = await this.productLinks;
    const firstProduct = productLinks[0];
    await firstProduct.scrollIntoView();
    await this.waitAndClick(firstProduct);
  }

  async clickProductByIndex(index) {
    await this.waitForProducts();

    const products = await this.products;
    const product = products[index];
    await this.waitAndClick(product);
  }
}

module.exports = ProductListComponent;
