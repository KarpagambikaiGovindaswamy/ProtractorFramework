/**
 * 
 */

function checkout(){
	var calculateAmount = 0;
	var totalAmount;
		
	this.itemsList = element.all(by.tagName("app-card"));
	this.addBtn = element(by.buttonText("Add"));
	this.shopLink = element(by.linkText("Shop"));
	this.checkoutBtn = element(by.partialLinkText("Checkout"));
	this.rowItems = element.all(by.css("tbody tr"));
	this.cartTotal = element(by.css("td[class='text-right'] h3"));
	this.removeBtns = element.all(by.buttonText("Remove"));
	
	this.searchAndAddProduct = function(searchProduct){
		this.itemsList.each(function(items){
			items.element(by.css("h4[class='card-title']")).getText().then(function(title){
				if(title == searchProduct){
					items.element(by.buttonText("Add")).click();
				}
			})
		})	
	};
	
	this.getRowTotal = function(){
		
		  this.rowItems.each(function(rows){
			rows.element(by.css("td:nth-child(4)")).getText().then(function(rowTotal){
			console.log("rowTotal"+rowTotal);
			if(rowTotal.toString().charAt(0) == '₹'){
			var amount = rowTotal.split(". ");
			amount[1] = Number(amount[1].trim());
			console.log("After splitting the value:"+amount[1]);
			calculateAmount = calculateAmount+amount[1];
			console.log("calculateAmount"+calculateAmount);
			}			
			});	
		});
		this.cartTotal.getText().then(function(total){
			var totalAmt = total.split(". ");
			totalAmount = Number(totalAmt[1]);
			console.log("totalAmount"+totalAmount);
			console.log("calculateAmount"+calculateAmount);
			expect(calculateAmount).toEqual(totalAmount);
		});  
	};
	
};

module.exports = new checkout();

