const { Given, When, Then } = require('@wdio/cucumber-framework');
const { pages } = require('../../po');

const mainPage = pages('mainPage');

Given('I am on the main page', async () => {
    await mainPage.open();
});

When('I enter {string} in the search field', async (keyword) => {
    await mainPage.search.enterSearchKeyword(keyword);
});

When('I click the search button', async () => {
    await mainPage.search.clickSearchButton();
});

Then('I should see 2 products in the results', async () => {
    const products = await mainPage.search.getSearchResults();
    assert.lengthOf(products, 2);
});

Then('Each product should contain {string} in the title', async (keyword) => {
    const titles = await mainPage.search.getProductTitles();
    for (const title of titles) {
        assert.include(title.toLowerCase(), keyword.toLowerCase());
    }
});