/**
 * 
 */

function registration(){
	
	this.name = element(by.xpath("//label[text()='Name']/following-sibling::input"));
	this.email= element(by.css("input[name='email']"));
	this.password= element(by.id("exampleInputPassword1"));
	this.dob= element(by.name("bday"));
	this.registerCheckbox= element(by.css("input[type='checkbox']"));
	this.selectDropdown= element(by.cssContainingText("select[id='exampleFormControlSelect1'] option","Female"));
	this.radioButton= element.all(by.name("inlineRadioOptions"));
	this.submit= element(by.buttonText('Submit'));
	this.successMsg= element(by.css("div[class*='alert-success']"));
	
};

module.exports = new registration();