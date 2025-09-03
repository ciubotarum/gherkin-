# Initialize WebdriverIO with Cucumber

- Open in terminal the project folder or navigate to it
```sh
cd /path/to/your/project
```
- Initialize the project
```sh
npm init -y
```
- Install WebdriverIO cli
```sh
npm install --save-dev @wdio/cli
```
- Run the WebdriverIO configuration wizard
```sh
npx wdio config
```
- Install Required Packages
```sh
npm install --save-dev @wdio/local-runner @wdio/chromedriver-service @wdio/cucumber-framework @wdio/spec-reporter
```

# Run the Tests
```sh
npm test
```

# Install service for Firefox

```bash
npm install --save-dev geckodriver
npm install --save-dev wdio-geckodriver-service
```

# Run tests in specific browser
- For Chrome
```bash
npx wdio run wdio.conf.js --capabilities browserName=chrome
```
- For Firefox
```bash
npx wdio run wdio.conf.js --capabilities browserName=firefox
```
