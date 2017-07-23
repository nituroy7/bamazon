CREATE DATABASE bamazon;
USE bamazon;
drop table if exists products;

CREATE TABLE products (
item_id INTEGER(200) NOT NULL AUTO_INCREMENT,
product_name VARCHAR(500) NOT NULL,
department_name VARCHAR(255) NOT NULL,
price DECIMAL(10, 3) NOT NULL,
stock_quantity INTEGER(200) NOT NULL,
primary key(item_id));

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES("Tide PODS Spring Meadow Scent, 81 count", "Detergent Pacs & Tablets", 19.99, 90);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES("Apple iPhone 7 Unlocked Phone 32 GB", "Electronics", 711.99, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES("Apple MacBook Air 13.3-Inch Laptop", "Electronics", 844.99, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES("Samsung Electronics QN75Q8C Curved 75-Inch 4K", "Electronics", 4997.99, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES("Nikon D300 DX 12.3MP Digital SLR Camera", "Electronics", 1499.95, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES("Nikon D750 FX-format Digital SLR Camera", "Electronics", 1796.95, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES("Celestron 127EQ PowerSeeker Telescope", "Electronics", 711.99, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES("Celestron 21035 70mm Travel Scope", "Electronics", 133.45, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES("Orion 10015 StarBlast 4.5 Astro Reflector Telescope", "Electronics", 206.97, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES("Copper Chef Copper Crisper", "Cookware Sets", 19.99, 100);



 
SELECT * FROM bamazon.products; 