CREATE TABLE Employees (
    ID INT PRIMARY KEY,
    Name VARCHAR(100),
    Salary DECIMAL(10,2),
    Department_Id INT,
    FOREIGN KEY (Department_Id) REFERENCES Departments(ID)
);