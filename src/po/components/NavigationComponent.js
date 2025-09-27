const BaseComponent = require('./BaseComponent');

class NavigationComponent extends BaseComponent {
    get categoriesButton() { return $('a[data-test="nav-categories"]'); }
    get languageButton() { return $('#language'); }
    get languageDropdown() { return $('#dropdown-animated'); }
    get handToolsLink() { return $('a[data-test="nav-hand-tools"]'); }

    async clickCategories() {
        await this.waitAndClick(this.categoriesButton);
    }

    async selectHandTools() {
        await this.waitAndClick(this.handToolsLink);
    }

    async clickLanguage() {
        await this.waitAndClick(this.languageButton);
    }

    async selectLanguage(index = 0) {
        const languages = await this.languageDropdown.$$('li');
        await this.waitAndClick(languages[index]);
    }

    async getLanguageList() {
        await this.languageDropdown.waitForDisplayed({ timeout: 5000 });
        return await this.languageDropdown.$$('li');
    }

    async isLanguageDropdownVisible() {
        try {
            await this.languageDropdown.waitForDisplayed({ timeout: 5000 });
            return true;
        } catch (error) {
            return false;
        }
    }

    async getCurrentLanguage() {
        return await this.waitAndGetText(this.languageButton);
    }
}

module.exports = NavigationComponent;