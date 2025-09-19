const path = require('path');
exports.config = {
    runner: 'local',
    specs: [
        '../tests/**/*.feature'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 2,
    specFileRetries: 2,
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--headless', '--disable-gpu', '--window-size=1920,1080']
            }
        },
        {
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ['-headless']
            }
        }
    ],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'warn',
    bail: 0,
    // baseUrl: 'http://localhost:8080',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        'chromedriver',
        'geckodriver'
    ],
    framework: 'cucumber',
    reporters: ['spec'],

    cucumberOpts: {
        require: [path.resolve(__dirname, '../tests/step_definitions/*.steps.js')],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },

    before: function (capabilities, specs) {
        global.expect = require('chai').expect;
        global.assert = require('chai').assert;
        require('chai').should();
    },

    afterStep: async function (step, scenario, result, context) {
        if (!result.passed) {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const filename = `ERROR_${timestamp}.png`;
            await browser.saveScreenshot(path.resolve(__dirname, '../../errorShots', filename));
        }
    },
}
