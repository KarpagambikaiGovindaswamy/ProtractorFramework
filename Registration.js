/**
 * 
 */

describe('Verification of registration form', function(){
	
	var input = require("./DataProvider.js");
	var using = require('jasmine-data-provider');
	var cf = require("./CommonFunctions.js");
	var register = require("./Registration_BasePage.js");
	
	beforeEach(function(){
		cf.getURL();
	})
	
	using(input.Datum,function(data, description){
		
	it('Verification of different form elements using different locators', function(){
		
		var successMessage = "Success! The Form has been submitted successfully!.";
		
		//Different Locators
		register.name.sendKeys(data.name);
		register.email.sendKeys(data.email);
		register.password.sendKeys(data.password);
		
		register.registerCheckbox.click();
		register.selectDropdown.click();
		
		//identical parameters
		register.radioButton.get(1).click();
		register.radioButton.first().click();
		
		register.dob.sendKeys(data.dob);
		register.submit.click().then(function(){
			register.successMsg.getText().then(function(text){
				console.log("Submit text"+text);
			});
			
			expect(register.successMsg.getText()).toContain(successMessage);
			expect(register.successMsg.getText()).toMatch(successMessage);
		});
		
	});
	
	});
	
    afterEach(function(){
		console.log("Test Execution completed");
	})
	
});