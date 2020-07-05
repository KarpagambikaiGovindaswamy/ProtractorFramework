/**
 * 
 */
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  directConnect:true,		
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Registration.js'],
  
  capabilities: {
	  'browserName': 'chrome'
	  /*'browserName': 'firefox',
	  'moz:firefoxOptions': {
	    'args': ['--safe-mode']
	  }*/
	  /*'browserName': 'internet explorer',
	    'ensureCleanSession':'true',
      'ignoreProtectedModeSettings': 'true'*/
  },
  
  onPrepare: function() {
	  browser.driver.manage().window().maximize();
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
   },
   
   suites:{
	   SmokeTest: 'Registration.js',
	   RegressionTest: ['Registration.js','Checkout.js']
   },

  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  } 
    
};