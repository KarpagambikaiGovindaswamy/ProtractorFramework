/**
 * 
 */

function commonfunc(){
	
	this.getURL = function(){
		browser.get("https://rahulshettyacademy.com/angularpractice/");
	};
	
};

module.exports = new commonfunc();