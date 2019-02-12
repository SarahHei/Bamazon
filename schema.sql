DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products
(
  item_id   INT AUTO_INCREMENT,
  product_name   VARCHAR(100),
  department_name   VARCHAR(100),
  price DECIMAL(10,2),
  stock_quantity INT,
  primary key(item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES 
(1, "red nail polish", "Cosmetics", 5, 100),
(2, "red lipstick", "Cosmetics", 10, 100),
(3, "How to Get Ahead in Advertising", "Movies", 12.99, 10),
(4, "Barbarella", "Movies", 12.99, 10),
(5, "Zen and the Art of Motorcycle Maintenance", "Books", 10, 50),
(6, "Gone with the Wind", "Books", 7.99, 500),
(7, "light bulbs", "Housewares", 3.99, 100),
(8, "tin foil", "Housewares", 1.99, 100),
(9, "socks", "Clothing", 5, 200),
(10, "t-shirts", "Clothing", 10, 100);

SELECT * FROM products;