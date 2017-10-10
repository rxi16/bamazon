// require packages
var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon",
  table: "products"
});
connection.connect(function(err) {
  if (err) throw err;
  displayProducts();
  promptProductId();
});
function displayProducts() {
	console.log(connection.table);
}
function promptProductId() {
	inquirer.prompt({
    	name: "id",
    	type: "list",
    	message: "What is the item_id of the product you would like to purchase? [Quit with Q]",
    	choices: [1,2,3,4,5,6,7,8,9,10]
    	})
    	.then(function(answer) {
    		if (answer.id.trim() === 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10) {
    			promptProductQuantity();
    		}
    		else if (answer.id.trim().toLowerCase() === 'q') {
    			mysql.endConnection();
    		}
		});
}
function promptProductQuantity() {
	inquirer.prompt({
    	name: "id",
    	type: "list",
    	message: "How many would you like to order? [Quit with Q]"
    	})
    	.then(function(answer) {
    		if (answer.id.trim().toLowerCase() === 'q') {
    			mysql.endConnection();
    		}
    		else if (isNaN === false) {
    			var productQuantity = answer.id.trim().parseInt();
    			var newStockQuantity = stock_quantity - orderQuantity;
    			var grabPrice = connection.query("SELECT price WHERE item_id IS answer.id");
    			updateStockQuantity();
    		}
    		else if (isNaN === true) {
    			console.log("Invalid quantity");
    			promptProductQuantity();
    		}
		});
}
function updateStockQuantity() {
	connection.query("UPDATE products SET ? WHERE ?",
    	[
      		{
        		stock_quantity: newStockQuantity
      		},
      		{
        		item_id: id
      		}
    	],
    function(err, res) {
      console.log(res.affectedRows + " products updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      deleteProduct();
    }
  );
}
