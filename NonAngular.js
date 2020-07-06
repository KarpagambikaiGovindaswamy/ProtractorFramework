/**
 * 
 */

describe('Verification of Non-Angular website', function(){
	
	var cf = require("./CommonFunctions.js");
	var njs = require("./NonAngular_BasePage.js");
	
	beforeEach(function(){
		cf.getNonAngularURL();
	});
	
	it('Verification of Alerts', function(){
		
		njs.alertBtn.click();
		cf.acceptAlert();
		njs.confirmBtn.click();
		cf.acceptAlert();
		njs.confirmBtn.click();
		cf.dismissAlert();
		
	});
	
	it('Actions verification', function(){
		
		browser.actions().mouseMove(element(by.id("mousehover"))).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform();	
		
	});
	
	afterEach(function(){
		console.log("Test Execution completed");
    });
	
});
