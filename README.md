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