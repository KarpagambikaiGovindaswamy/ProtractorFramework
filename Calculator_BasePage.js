/**
 * 
 */


function calculator(){
	
	this.firstInput = element(by.model('first'));
	this.secondInput= element(by.model('second'));
	this.operator = element(by.model('operator'));
	this.goButton = element(by.id('gobutton'));
	this.operators = element.all(by.tagName("option"));
	this.results = element.all(by.repeater("result in memory"));
		
	this.calculate = function(input1, input2, operator){
		this.firstInput.sendKeys(input1);
		this.operators.each(function(items){
			items.getAttribute("value").then(function(operationMode){
				if(operationMode == operator){
					items.click();
				}
			})
		 });			
		this.secondInput.sendKeys(input2);
		this.goButton.click();
	};
	
	this.selectOperatorUsingCss = function(){
		this.operator.click().element(by.css("option:nth-child(4)")).click();
	};
	
	this.selectOperatorUsingValue = function(){
		this.operator.click().element(by.css("option[value='ADDITION']")).click();
	};
	
	this.printTestResults = function(){
		
		this.results.each(function(items){
			items.element(by.css("td:nth-child(3)")).getText().then(function(result){
				console.log("Test Result::"+result);
			});
		});
		
	};

};

module.exports = new calculator();
	