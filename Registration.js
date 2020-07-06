/**
 * 
 */

describe('Verification of registration form', function(){
	
	var input = require("./DataProvider.js");
	var using = require('jasmine-data-provider');
	var cf = require("./CommonFunctions.js");
	var msg = require("./MessageProperties.js");
	var register = require("./Registration_BasePage.js");
	
	beforeEach(function(){
		cf.getURL();
	})
	
	using(input.Datum,function(data, description){
		
		it('Verification of different form elements using different locators '+description, function(){
					
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
					var confirmMessage = text.trim().replace("\n","").replace("×","");
					console.log("Confirmation Message::"+confirmMessage);
					expect(confirmMessage).toEqual(msg.successMessage);
				});
				
				expect(register.successMsg.getText()).toContain(msg.successMessage);
				expect(register.successMsg.getText()).toMatch(msg.successMessage);
			});
			
		});
	
	});
	
   using(input.Register,function(data, description){	
	   
	   it('Validation Message Verification', function(){
						
		  register.name.sendKeys(data.name);
		  register.email.sendKeys(data.email);
		  expect(register.errorMsg.getText()).toEqual(msg.nameErrorMessage);
		  expect(register.errorMsg.isPresent()).toBe(true);
		  expect(register.allErrorMsgs.count()).toEqual(1);
		
	    });
   
   });
	
    afterEach(function(){
		console.log("Test Execution completed");
	})
	
});