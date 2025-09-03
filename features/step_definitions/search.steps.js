const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the main page', async () => {
    await browser.url('https://practicesoftwaretesting.com/');
});

When('I enter {string} in the search field', async (keyword) => {
    const searchInput = await $('#search-query');
    await searchInput.waitForDisplayed({ timeout: 5000 });
    await searchInput.waitForEnabled({ timeout: 5000 });
    await searchInput.waitForClickable({ timeout: 5000 });
    await searchInput.setValue(keyword);
});

When('I click the search button', async () => {
    const searchBtn = await $('button[type="submit"]');
    await searchBtn.click();
});

Then('I should see 2 products in the results', async () => {
    const resultsContainer = await $('[data-test="search_completed"]');
    await resultsContainer.waitForDisplayed({ timeout: 5000 });

    const products = await resultsContainer.$$('a.card[data-test^="product-"]');
    console.log("There have been found", products.length);
    expect(products.length).toBe(2);
});

Then('Each product should contain {string} in the title', async (keyword) => {
    const resultsContainer = await $('[data-test="search_completed"]');
    const products = await resultsContainer.$$('a.card[data-test^="product-"]');

    for (const product of products) {
        const title = await product.$('h5[data-test="product-name"]').getText();
        expect(title.toLowerCase()).toContain(keyword.toLowerCase());
    }
});