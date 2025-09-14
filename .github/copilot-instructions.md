# WebdriverIO + Cucumber BDD Test Automation Framework

## Architecture Overview
This is a BDD test automation framework using WebdriverIO 9 + Cucumber for testing the Practice Software Testing e-commerce site. The framework follows a layered architecture pattern with configuration centralized in `configs/` directory.

### Key Components
- **Feature Files**: `features/*.feature` - Gherkin scenarios for user journeys (login, search, checkout, etc.)
- **Step Definitions**: `features/step_definitions/*.steps.js` - Implementation of Gherkin steps using WebdriverIO
- **Configuration**: `configs/wdio.conf.js` - WebdriverIO config with multi-browser support and screenshot capture
- **Error Handling**: `errorShots/` - Automatic screenshot capture on test failures

## Critical Development Patterns

### Cross-Browser Robustness (Essential)
Always use this pattern for element interactions to ensure Firefox/Chrome compatibility:
```javascript
const element = await $('#selector');
await element.waitForDisplayed({ timeout: 5000 });
await element.waitForEnabled({ timeout: 5000 });
await element.waitForClickable({ timeout: 5000 });
await browser.pause(200); // Angular apps need this
await element.clearValue();
await element.setValue('text');
```

### Chai Assertions Pattern
Import Chai in each step file and use robust text matching:
```javascript
const { expect } = require('chai');
// Robust assertion for cross-browser text differences
expect(actualText.trim()).to.include('expected text');
```

### Selector Strategy
- Prefer `data-test` attributes: `$('[data-test="product-name"]')`
- Use `$$('[data-test^="product-"]')` for multiple elements
- Avoid index-based selectors due to browser timing differences

## Developer Workflows

### Running Tests
```bash
npm test                    # All browsers (Chrome + Firefox headless)
npm run wdio               # Same as npm test
npx wdio run configs/wdio.conf.js --capabilities browserName=chrome  # Chrome only
npx wdio run configs/wdio.conf.js --capabilities browserName=firefox # Firefox only
```

### Configuration Location
- Main config: `configs/wdio.conf.js` (NOT in root)
- All paths in config are relative to `configs/` folder (use `../features/`)
- Screenshots save to `errorShots/` in project root

### Test Structure
1. Each feature file maps to a `.steps.js` file
2. Step definitions follow naming: `features/step_definitions/{feature-name}.steps.js`
3. Common navigation steps like "I am on the main page" are reused across features

## Framework-Specific Details

### WebdriverIO Configuration
- **Retry Logic**: `specFileRetries: 2` for flaky test handling
- **Multi-Browser**: Chrome + Firefox capabilities configured
- **Timeouts**: 60s Cucumber timeout, 10s element wait timeout
- **Services**: chromedriver and geckodriver auto-managed

### Target Application Knowledge
Testing `https://practicesoftwaretesting.com/` - an Angular e-commerce site with:
- Login: `customer@practicesoftwaretesting.com` / `welcome01`
- Dynamic product loading requiring `waitUntil` patterns
- Toast notifications after cart actions
- Multi-step checkout flow with payment dropdown

### Common Gotchas
1. **Angular Loading**: Always wait for product elements before interaction
2. **Firefox Input Issues**: Use `clearValue()` + `setValue()` + pause for reliable input
3. **Text Assertions**: Use `.trim()` and `.include()` for cross-browser compatibility
4. **Payment Flow**: Requires specific dropdown option selection (`options[2]`)

### Adding New Tests
1. Create `.feature` file in `features/`
2. Create corresponding `.steps.js` file in `features/step_definitions/`
3. Use existing step patterns for navigation and assertions
4. Test in both Chrome and Firefox before committing

## Key Files for Reference
- `features/step_definitions/checkout.steps.js` - Complex multi-step flow example
- `features/step_definitions/search.steps.js` - Robust input handling pattern
- `configs/wdio.conf.js` - Multi-browser configuration with screenshot capture