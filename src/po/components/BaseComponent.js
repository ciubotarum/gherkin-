class BaseComponent {
  async waitAndClick(element) {
    await element.waitForDisplayed({ timeout: 10000 });
    await element.waitForEnabled({ timeout: 10000 });
    await element.waitForClickable({ timeout: 10000 });
    await element.scrollIntoView();
    await element.click();
  }

  async waitAndSetValue(element, value) {
    await element.waitForDisplayed({ timeout: 10000 });
    await element.waitForEnabled({ timeout: 10000 });
    await element.scrollIntoView();
    await browser.pause(200);
    await element.setValue(value);
  }

  async waitAndGetText(element) {
    await element.waitForDisplayed({ timeout: 10000 });
    await element.scrollIntoView();
    const text = await element.getText();
    return text.trim();
  }
}

module.exports = BaseComponent;
