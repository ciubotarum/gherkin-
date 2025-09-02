const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the main page looking to filter products', async () => {
    await browser.url('https://practicesoftwaretesting.com/');
});

When('I select a "Hammer" category', async () => {
    const firstCategoryInput = await $$('div.checkbox div.checkbox input.icheck[name="category_id"]')[0];
    await firstCategoryInput.click();
});

Then('only seven products should be displayed in the filtered results', async () => {
    const resultsContainer = await $('[data-test="filter_completed"]');
    await resultsContainer.waitForDisplayed({ timeout: 5000 });
    const products = await resultsContainer.$$('a.card[data-test^="product-"]');

    console.log("Products found:", products.length);

    expect(products.length).toBe(7);
});

Then('filter by brand "MightyCraft Hardware"', async () => {
    const brandFilterInput = await $$('input[name = "brand_id"]')[1];
    await brandFilterInput.waitForEnabled({ timeout: 5000 });
    await brandFilterInput.click();
});

Then('only 1 product should be displayed in the filtered results', async () => {
    const resultsContainer = await $('[data-test="filter_completed"]');
    await resultsContainer.waitForDisplayed({ timeout: 5000 });
    const products = await resultsContainer.$$('a.card[data-test^="product-"]');

    console.log("Products found:", products.length);

    expect(products.length).toBe(1);
});
