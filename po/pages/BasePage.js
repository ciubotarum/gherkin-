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
}

module.exports = BasePage;