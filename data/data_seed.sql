--Adding Departments
INSERT INTO Departments (ID, Name) VALUES 
(1, 'IT'),
(2, 'Operations'),
(3, 'Human resources'),
(4,'Accounting and Finance'),
(5,'Research and Development (R&D)');

-- Adding Employees
INSERT INTO employees (ID,Name,Salary ,Department_Id)VALUES
(1,'Ahmed',5000,3),
(2,'Mohamed',4000,1),
(3,'Peter',3000,2),
(4,'Clara',6000,4),
(5,'Beshoy',7000,4),
(6,'Menna',5500,2),
(7,'Gina',9400,3);

-- Adding Customers
INSERT INTO Customers (ID, Name, Address) VALUES 
('CI-C001', 'Customer 1', 'Cairo'),
('CI-C002', 'Customer 2', 'Cairo'),
('CI-C003', 'Customer 3', 'Giza'),
('CI-C004', 'Customer 4', 'Banha'),
('CI-C005', 'Customer 5', 'Alex');

-- Adding Products
INSERT INTO Products (ID, Name, Cost) VALUES 
(100, 'Product 1', 100.05),
(101, 'Product 2', 150.40),
(102, 'Product 3', 800.00),
(103, 'Product 4', 790.50),
(104, 'Product 5', 500.00),
(105, 'Product 6', 200.50);

-- Adding Orders
INSERT INTO Orders (ID, Customer_Id, Product_Id, Amount) VALUES 
('D-01', 'CI-C002', 100, 5), -- Customer 1 Pays 5 of Product 1 
('D-02', 'CI-C004', 101, 8), 
('D-03', 'CI-C004', 103, 4),
('D-04customers', 'CI-C005', 105, 3); 

