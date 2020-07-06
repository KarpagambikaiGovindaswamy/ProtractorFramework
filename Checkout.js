/**
 * 
 */

describe ('To verify the checkout process', function(){
	
   var checkout = require("./Checkout_BasePage.js");	
   var cf = require("./CommonFunctions.js");
   var msg = require("./MessageProperties.js");
      
   beforeEach(function(){
		cf.getURL();
   })
   	
   it('Search Products and Add to Cart', function(){
		
		checkout.shopLink.click();
		checkout.searchAndAddProduct("Samsung Note 8");
		checkout.searchAndAddProduct("iphone X");
		checkout.searchAndAddProduct("Blackberry");
		checkout.searchAndAddProduct("Nokia Edge");
		expect(checkout.checkoutBtn.getText()).toContain(msg.checkoutLabel);
		checkout.checkoutBtn.getText().then(function(number){
			var checkoutCount = number.split("(");
			checkoutCount[1]= checkoutCount[1].trim().charAt(0);
			console.log(checkoutCount[1]);
			expect(checkoutCount[1]).toBe("4");
		});
		checkout.checkoutBtn.click();
		checkout.getRowTotal();
		checkout.removeBtns.count().then(function(rowCount1){
			console.log(rowCount1);
			expect(rowCount1).toEqual(4);
		});
		checkout.removeBtns.first().click();
		checkout.removeBtns.count().then(function(rowCount2){
			console.log(rowCount2);
			expect(rowCount2).toEqual(3);
		});
		
	});
   
	afterEach(function(){
		console.log("Test Execution completed");
    })
	
});