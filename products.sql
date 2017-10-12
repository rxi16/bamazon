DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price FLOAT(2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, price, stock_quantity) VALUES ('Microbiology', 'books', 62.75, 100), ('Behavioral Statistics', 'books', 41.35, 245), ('On Intelligence', 'books', 19.99, 35),
('vitamin D 100 count', 'supplements', 14.99, 40), ('calcium carbonate 100 count', 'supplements', 7.99, 85), ('calcium citrate 100 count', 'supplements', 9.99, 85), ('dates 12 oz', 'groceries', 5.95, 25), 
('raisins 12 oz', 'groceries', 5.95, 20), ('goji berries 12 oz', 'groceries', 15.95, 25), ('sterling silver chain bracelet', 'jewelry', 136.00, 2);

select * from products;