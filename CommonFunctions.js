/**
 * 
 */

function commonfunc(){
	
	this.getURL = function(){
		browser.get("https://rahulshettyacademy.com/angularpractice/");
	};
	
	this.getCalculatorURL = function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
	};
	
	this.getNonAngularURL = function(){
		browser.waitForAngularEnabled(false);
		browser.get("https://rahulshettyacademy.com/AutomationPractice/");
	};
	
	this.acceptAlert = function(){
		browser.switchTo().alert().accept();
	};
	
	this.dismissAlert = function(){
		browser.switchTo().alert().dismiss();
	};
};

module.exports = new commonfunc();