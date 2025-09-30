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
        args: [
          '--headless=new',
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--disable-extensions',
          '--no-sandbox',
          '--disable-web-security',
          '--disable-features=VizDisplayCompositor',
          '--window-size=1920,1080',
          '--disable-blink-features=AutomationControlled',
        ],
        prefs: {
          'profile.default_content_setting_values.notifications': 2,
        },
      },
      'wdio:devtoolsOptions': {
        headless: true,
      },
    },
    {
      browserName: 'firefox',
      'moz:firefoxOptions': {
        args: ['-headless'],
      },
    },
  ],
  logLevel: 'warn',
  baseUrl: 'https://practicesoftwaretesting.com',
  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver', 'geckodriver'],
  framework: 'cucumber',

  reporters: [
    'spec',
    [
      'html-nice',
      {
        outputDir: './reports/html-reports',
        filename: 'report.html',
        reportTitle: 'WebdriverIO Test Report - Gherkin BDD Tests',
        showInBrowser: false,
        collapseTests: false,
        linkScreenshots: true,
        screenshotPath: './reports/html-reports/screenshots',
      },
    ],
  ],

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
    ignoreUndefinedDefinitions: false,
  },

  onPrepare: function (config, capabilities) {
    const outputDir = path.join(__dirname, '../../reports/html-reports');
    const screenshotsDir = path.join(__dirname, '../../reports/html-reports/screenshots');

    [outputDir, screenshotsDir].forEach((dir) => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  },

  onComplete: async function (exitCode, config, capabilities, results) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const { ReportAggregator } = await import('wdio-html-nice-reporter');
    const reportAggregator = new ReportAggregator({
      outputDir: './reports/html-reports',
      filename: 'report.html',
      reportTitle: 'WebdriverIO Test Report - Gherkin BDD Tests',
      browserName: 'multi-browser',
      showInBrowser: false,
      collapseTests: false,
      linkScreenshots: true,
      LOG: 'warn',
    });

    await reportAggregator.createReport();
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
      const filepath = path.resolve(__dirname, '../../reports/html-reports/screenshots', filename);
      await browser.saveScreenshot(filepath);
    }
  },
};
