CREATE TABLE Orders (
    ID VARCHAR(10) PRIMARY KEY,
    Customer_Id VARCHAR(10),
    Product_Id INT,
    Amount INT,
    FOREIGN KEY (Customer_Id) REFERENCES Customers(ID),
    FOREIGN KEY (Product_Id) REFERENCES Products(ID)
);