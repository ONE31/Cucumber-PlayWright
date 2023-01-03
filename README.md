# cucumber-playwright

A starter repo for writing E2E tests based on Cucumber(7) with Playwright using Typescript.

## Kudos

This repository is based on the [Cucumber-typescript-starter](https://github.com/hdorgeval/cucumber7-ts-starter/) repo.

## What's inside

- Typescript setup for writing steps with eslint/typescript and prettier

_features_:

Features (Scenarios) are in [features]

_reports_:

Reports will be generated after the test execution

_screenshots_:

Screenshots will be stored after the test execution

_src/steps_:

TypeScript step definitions are in [src/steps]

_src/support/reporters_:

Allure report

_support/common-hooks.js_:

Before all tests:

- Launching Playwright browser - chromium by default
- Launching new context and page for each scenario
- Running feature with video recording option
- Storing trace for the scenario

After all tests:

- Close the page
- Close context
- Close Browser
- Strore trace

_support/config.ts_:

Playwright configurations: browser options, BASE_URL and so on

_support/custom-world.ts_:

Define runtime configuration

Support/utils:

- Utilies function to help you with writing steps

_.env_:

Provide env variables (dotnet)

_cucumber.mjs_:

Set up configurations:

- cucumber/pretty-formatter and Cucumber HTML - by default
- Report generated with last good image attached
- Allure report - if env.USE_ALLURE=true

_htmlReortGenerator.js_:

Cucumber HTML Report

_.vscode/launch.json_:

- VScode configuration to debug a single feature or an only scenario (run when located on the feature file)

## How to use this project

Create a repo based on this template and start writing your tests.

git clone <git_repository>

open project on VS

npm install
npm install typescript --save-dev
npm install playwright install
npm install @playwright/test
npm install dotenv --save --force
npm install--save-dev -ts-node tsconfig-paths
npm install cucumber-html-reporter
npm install @types/cucumber-html-reporter
npm install -g allure-commandline --save-dev

## Browser selection

By default we will use chromium. You can define an envrionment variable called BROWSER and
set the name of the browser. Available options: chromium, firefox, webkit

On Linux and Mac you can write:

`BROWSER=firefox npm run test` or `BROWSER=firefox npx cucumber-js` runs all tests using Firefox

One Windows you need to write

```
set BROWSER=firefox
npm run test
```

## To run your tests

`npm run test` or `npx cucumber-js` runs all tests
`npm run test <features/feature name>` or `npx cucumber-js <features/feature name>` run the single feature

## To ignore a scenario

- tag the scenario with `@ignore`

## Debugging Features

### From CLI

- `npm run debug` - headful mode with APIs enables both APIs and debug options
- `npm run api` - headless mode with debug apis
- `npm run video` - headless mode vith video

## In Visual Studio Code

- Open the feature
- Select the debug options in the VSCode debugger
- Set breakpoints in the code

To stop the feature, you can add the `Then debug` step inside your feature. It will stop your debugger.

## To view allure report

To use Allure reporting, you can run with env param: `USE_ALLURE=1`, and then use the `npm run allure` to show the report.

## To view Cucumber HTML report

-run the command 'node ./htmlReportGenerator.js'

## To check for typescript, linting and gherkin errors

- run the command `npm run build`.

## To view the steps usage

- run the command `npm run steps-usage`.
