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

# Run only one feature file

```sh
npm test -- --spec features/nameOfFeature.feature
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

# Use Chai Assertions

- Install Chai

```bash
npm install --save-dev chai
```

# Install HTML reporter

```bash
npm install --save-dev wdio-html-nice-reporter
```

- The reporter will be automatically opened in the browser.
- You must delete the forlder `reports` if you want to generate a new report.

- To open the report manually run in terminal from the project root folder:
```bash
# Windows
start reports/html-reports/report.html
```

# Prettier

- Install Prettier

```bash
npm install --save-dev --save-exact prettier
```

- To format all files

```bash
npx prettier . --write
# or
npm run format
```

- To check formatting

```bash
npx prettier . --check
# or
npm run format:check
```

# ESLint

- Install ESLint

```bash
npm install --save-dev eslint@latest @eslint/js@latest
```

- Run the linting
```bash
npx eslint src/
# or
npm run lint
```

- To fix linting issues automatically

```bash
npx eslint src/ --fix
# or
npm run lint:fix
```
- To check linting with zero warnings (exit code 1 if there are warnings or errors)

```bash
npx eslint src/ --max-warnings 0
# or
npm run lint:check
```

