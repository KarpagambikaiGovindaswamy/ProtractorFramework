/**
 * 
 */

describe('To Demonstrate protractor locators', function(){
	
	var cf = require("./CommonFunctions.js");
	var cal = require("./Calculator_BasePage.js");
	
	beforeEach(function(){
		cf.getCalculatorURL();
	});
	
	it('chain locators',function(){
		
		cal.calculate(3,4,'ADDITION');
		cal.calculate(4,5,'DIVISION');
		cal.calculate(6,7,'SUBTRACTION');
		
		//chain locators, repeater and css for identical tags
		cal.firstInput.sendKeys("3");
		//chain locators
		
		cal.selectOperatorUsingCss();
		cal.selectOperatorUsingValue();
				
		cal.secondInput.sendKeys("5");
		cal.goButton.click();
		
		cal.results.count().then(function(rowCount){
			console.log("rowCount"+rowCount);
			expect(rowCount).toEqual(4);
		});
		
		cal.printTestResults();
	});
	
	afterEach(function(){
		console.log("Test Execution completed");
    });
});