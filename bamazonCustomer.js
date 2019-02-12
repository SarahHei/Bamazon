var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "Pelf36stony!",
  database: "bamazon"
});

connection.connect(function(err) {  
  if (err) throw err;
  console.log("Connected");
  showMenu();
});


function showMenu() { 
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log("----------For Sale---------");
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name+ " | " + res[i].price + " | " + res[i].stock_quantity);
    }
    console.log("-----------------------------------");
    wouldLikeToBuy();
  });
}

function wouldLikeToBuy() {
  inquirer.prompt([
      {
      name: "askItem",
      type: "input",
      message: "What item number would you like to buy?",
      },
      {
        name: "howMany",
        type: "input",
        message: "How many would you like ?"
      }
    ])
    .then(function(answer) {
      var itemToBuy = answer.askItem; 
      var thisMany = answer.howMany; 

        var query = connection.query("SELECT * FROM products WHERE item_id=?", [itemToBuy], function(err, res) {
          if (res[0].stock_quantity < parseInt(thisMany)) { 
            console.log("Insufficient Quantity!");
          } else {
            console.log("Your Order is complete");
            connection.query("UPDATE products SET ? WHERE ?", [
              {
                stock_quantity: res[0].stock_quantity - parseInt(thisMany)
            },
            {
              item_id: itemToBuy
            }

          ],function(err, result) {
            
            console.log("The price of " + thisMany + " " + res[0].product_name + "s" + " is " +  res[0].price * parseInt(thisMany) + " dollars each.");

            connection.end();
              
            })
          }
        });
      
    });
    
}
