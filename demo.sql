-- Create a table for 5 products with product names and prices
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10, 2)
);

-- Insert 5 products into the table
INSERT INTO products (id, name, price)
VALUES
    (1, 'Apple', 1.00),
    (2, 'Banana', 0.50),
    (3, 'Cherry', 3.00),
    (4, 'Date', 2.50),
    (5, 'Elderberry', 4.00);