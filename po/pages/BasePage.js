class BasePage {
    constructor(url) {
        this.url = url;
    }

    async open() {
        await browser.url(this.url);
        await this.waitForPageLoad();
    }

    async waitForPageLoad() {
        await browser.waitUntil(
            async () => (await browser.execute(() => document.readyState)) === 'complete',
            { timeout: 10000, timeoutMsg: 'Page did not load completely' }
        );
    }

    async waitAndClick(element) {
        await element.waitForDisplayed({ timeout: 5000 });
        await element.waitForEnabled({ timeout: 5000 });
        await element.waitForClickable({ timeout: 5000 });
        await browser.pause(200); 
        await element.click();
    }

    async waitAndSetValue(element, value) {
        await element.waitForDisplayed({ timeout: 5000 });
        await element.waitForEnabled({ timeout: 5000 });
        await browser.pause(200);
        await element.setValue(value);
    }

    async waitAndGetText(element) {
        await element.waitForDisplayed({ timeout: 5000 });
        const text = await element.getText();
        return text.trim();
    }
}

module.exports = BasePage;