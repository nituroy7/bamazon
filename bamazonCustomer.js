var mysql = require("mysql");
var inquirer = require("inquirer");
// var products = require("products");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "success123",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");

    connection.query("SELECT * FROM bamazon.products", function(err, res) {
        if (err) throw err;

        for (var i = 0; i < res.length; i++) {
            console.log("\n" + res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price +
                res[i].stock_quantity);
        }
        console.log("-----------------------------------");

        item_Search();

    });
});

// The app should then prompt users with two messages.
// The first should ask them the ID of the product they would like to buy.


function item_Search() {
    inquirer
        .prompt({
            name: "item_id",
            type: "input",
            message: "What is the ID of the product you would like to buy?",
        })
        .then(function(answer) {
            var query = "SELECT item_id, product_name, department_name, price, stock_quantity FROM products WHERE ?";
            connection.query(query, { item_id: answer.item_id }, function(err, res) {

                for (var i = 0; i < res.length; i++) {
                    console.log("\n" + res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " +
                        res[i].stock_quantity);
                }

            });
        });
};


//The second message should ask how many units of the product they would like to buy.
// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
// However, if your store does have enough of the product, you should fulfill the customer's order.

// function item_Buy() {
//     inquirer
//         .prompt({
//             name: "stock_quantity",
//             type: "input",
//             message: "How many units of the product you would like to buy?",
//         })
//         .then(function(answer) {
//             var query = "SELECT item_id, product_name, department_name, price, stock_quantity FROM products WHERE ?";
//             connection.query(query, { item_id: answer.item_id }, function(err, res) {

//                 for (var i = 0; i < res.length; i++) {
//                     console.log("\n" + res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " +
//                         res[i].stock_quantity);
//                 }

//             });
//         });
// };