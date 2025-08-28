const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the main page looking to filter products', async () => {
    await browser.url('https://practicesoftwaretesting.com/');
});

When('I select a "Hammer" category', async () => {
    const firstCategoryInput = await $$('div.checkbox div.checkbox input.icheck[name="category_id"]')[0];
    await firstCategoryInput.click();
});

Then('only seven product should be displayed in the filtered results', async () => {
    const resultsContainer = await $('[data-test="filter_completed"]');
    await resultsContainer.waitForDisplayed({ timeout: 5000 });
    const products = await resultsContainer.$$('a.card[data-test^="product-"]');

    console.log("Products found:", products.length);

    expect(products.length).toBe(7);
});
