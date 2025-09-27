const path = require('path');
const fs = require('fs');

exports.config = {
    runner: 'local',
    specs: ['../tests/**/*.feature'],
    maxInstances: 1,
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
    logLevel: 'warn',
    baseUrl: 'https://practicesoftwaretesting.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        'chromedriver',
        'geckodriver'
    ],
    framework: 'cucumber',

    reporters: [
        'spec',
        ['html-nice', {
            outputDir: './reports/html-reports',
            filename: 'report.html',
            reportTitle: 'WebdriverIO Test Report - Gherkin BDD Tests',
            showInBrowser: false,
            collapseTests: false,
            linkScreenshots: true,
            screenshotPath: './screenshots'
        }],
    ],

    cucumberOpts: {
        require: [path.resolve(__dirname, '../tests/step_definitions/*.steps.js')],
        timeout: 60000,
    },

    onPrepare: function (config, capabilities) {
        const outputDir = path.join(__dirname, '../../reports/html-reports');
        const screenshotsDir = path.join(__dirname, '../../reports/html-reportsscreenshots');

        [outputDir, screenshotsDir].forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });
    },

    onComplete: async function (exitCode, config, capabilities, results) {
        await new Promise(resolve => setTimeout(resolve, 2000));

        const { ReportAggregator } = await import('wdio-html-nice-reporter');
        const reportAggregator = new ReportAggregator({
            outputDir: './reports/html-reports',
            filename: 'report.html',
            reportTitle: 'WebdriverIO Test Report - Gherkin BDD Tests',
            browserName: 'multi-browser',
            showInBrowser: false,
            collapseTests: false,
            linkScreenshots: true,
            LOG: 'warn'
        });

        await reportAggregator.createReport();

        const reportPath = path.join(__dirname, '../../reports/html-reports/report.html');
        const { execSync } = require('child_process');
        execSync(`start "" "${reportPath}"`, {
            stdio: 'ignore',
            timeout: 5000
        });
    },

    before: function () {
        global.expect = require('chai').expect;
        global.assert = require('chai').assert;
        require('chai').should();
    },

    afterStep: async function (step, scenario, result) {
        if (!result.passed) {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const filename = `ERROR_${timestamp}.png`;
            const filepath = path.resolve(__dirname, '../../reports/html-reportsscreenshots', filename);
            await browser.saveScreenshot(filepath);
        }
    },
}
