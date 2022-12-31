var reporter = require('cucumber-html-reporter');
var date = new Date();
var currentDate = date.getDate() + '_' + (date.getMonth()+1) + '_' +date.getFullYear() + '_'
+ date.getHours()+ '_' + date.getMinutes()+ '_' + date.getSeconds()+ '_' + date.getMilliseconds();

var options = {
  brandTitle: 'Cucumber test scenarios',
  theme: 'hierarchy',
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/cucumber-report_' + currentDate + ' .html',
  screenshotsDirectory: './Screenshots/',
  stroreScreenshots: true,
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    'App Version': '1.1.1',
    'Test Environment': 'QA',
  },
};

reporter.generate(options);
