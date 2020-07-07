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
	   /*chromeOptions: {
	     args: [ "--headless", "--disable-gpu", "--window-size=1980,1080" ]
	   }*/
	  /*'browserName': 'firefox',
	  'moz:firefoxOptions': {
	    'args': ["--safe-mode", "--headless"]
	  }*/
	  /*'browserName': 'internet explorer',
	    'ensureCleanSession':'true',
      'ignoreProtectedModeSettings': 'true'*/
  },
  
  /*multiCapabilities: [{
	  'browserName': 'firefox',
	  'moz:firefoxOptions': {
		    'args': ['--safe-mode']
	   }
	}, {
	  'browserName': 'chrome'
	}],*/
  
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
	   RegressionTest: ['Registration.js','Checkout.js','Calculator.js','NonAngular.js']
   },

  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  } 
    
};