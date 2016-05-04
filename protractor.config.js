// An example configuration file.
// https://raw.github.com/angular/protractor/master/example/conf.js
exports.config = {
    framework: 'jasmine2',
    // The address of a running selenium server.
    seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar', // Make use you check the version in the folder
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        //'browserName': 'firefox'
        //'browserName': 'phantomjs'
        'browserName': 'chrome'
    },
    //directConnect: true,
	getPageTimeout: 60000,
	allScriptsTimeout: 120000,
	//restartBrowserBetweenTests: true,
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 120000,
        print: function() {}
    },
    onPrepare: function() {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'tests',
            filePrefix: 'result'
        }));
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({
          displayStacktrace: 'all',    // display stacktrace for each failed assertion, values: (all|specs|summary|none)
          displayFailuresSummary: false, // display summary of all failures after execution
          displayPendingSummary: true,  // display summary of all pending specs after execution
          displaySuccessfulSpec: true,  // display each successful spec
          displayFailedSpec: true,      // display each failed spec
          displayPendingSpec: false,    // display each pending spec
          displaySpecDuration: false,   // display each spec duration
          displaySuiteNumber: false,    // display each suite number (hierarchical)
          colors: {
            success: 'green',
            failure: 'red',
            pending: 'yellow'
          },
          prefixes: {
            success: '✓ ',
            failure: '✗ ',
            pending: '* '
          },
          customProcessors: []
        }));
    }
};