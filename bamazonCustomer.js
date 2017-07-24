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

    connection.query("SELECT * FROM bamazon.products", function(err, res) {
        if (err) throw err;

        for (var i = 0; i < res.length; i++) {
            console.log("\n\n" + "ID : " + res[i].item_id + "\n--------" + "\n\n" + "Product Name: " +
                res[i].product_name + " \n\n" + "Department : " + res[i].department_name + "\n\n" +
                "Price: " + "$" + res[i].price + "\n");

        }

        item_Search();

    });
});

function item_Search() {
    inquirer
        .prompt({
            name: "item_id",
            type: "input",
            message: "\n What is the ID of the product you would like to buy?",
        })
        .then(function(answer) {
            var query = "SELECT item_id, product_name, department_name, price, stock_quantity FROM products WHERE ?";
            connection.query(query, { item_id: answer.item_id }, function(err, res) {

                // for (var i = 0; i < res.length; i++) {
                //     console.log("\n" + res[0].item_id + " | " + res[0].product_name + " | " + res[0].department_name + " | " + "$" + res[0].price);
                // }
                item_Buy(answer);
            });

        });

};

function item_Buy(item) {
    inquirer
        .prompt({
            name: "stock_quantity",
            type: "input",
            message: "\n How many units of the product you would like to buy?",
        })
        .then(function(answer) {

            var query = "SELECT item_id, product_name, department_name, price, stock_quantity FROM products WHERE ?";
            connection.query(query, { item_id: item.item_id }, function(err, res) {

                console.log("\n Available quantity: " + res[0].stock_quantity);

                if (res[0].stock_quantity > answer.stock_quantity) {

                    res[0].stock_quantity = res[0].stock_quantity - answer.stock_quantity;

                    updateProduct(res[0].stock_quantity, item.item_id);

                } else {
                    console.log("\n Insufficient quantity!");
                }
                var cost = res[0].price * answer.stock_quantity;
                console.log("\n " + answer.stock_quantity  + " products added to the Cart!" + "\n\n Total Cost: " + cost);

            });

        });

};

function updateProduct(stock, id) {

    var query = connection.query(
        "UPDATE products SET ? WHERE ?", [{
                stock_quantity: stock
            },
            {
                item_id: id
            }
        ],
        function(err, res) {
            // console.log("\n " + res.affectedRows + " products added to the Cart!");
            console.log('\n Remaining quantity: ' + stock);
        }
    );
};

