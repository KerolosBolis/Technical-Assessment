// src/queries.js

export const EMPLOYEE_QUERIES = {
    GET_ALL_WITH_DEPT: `
        SELECT employees.ID, employees.Name, departments.Name AS Department 
        FROM employees 
        JOIN departments ON employees.Department_Id = departments.ID
    `
};

export const CUSTOMER_QUERIES = {
    GET_DETAILS_WITH_ORDERS: `
        SELECT customers.ID, customers.Name, orders.ID AS Order_ID, orders.Amount, 
        products.Name AS Product_Name, (orders.Amount * products.Cost) AS Total_Cost 
        FROM Customers 
        LEFT JOIN Orders ON customers.ID = orders.Customer_Id 
        LEFT JOIN Products ON orders.Product_Id = products.ID
    `
};

export const ORDER_QUERIES = {
    GET_ALL_DESC: `
        SELECT orders.ID, orders.Product_Id, products.Name 
        FROM Orders orders 
        JOIN Products products ON orders.Product_Id = products.ID 
        ORDER BY orders.ID DESC
    `
};

export const DEPT_QUERIES = {
    GET_SALARY_SUM: `
        SELECT departments.ID, departments.Name, IFNULL(SUM(employees.Salary),0) AS Total_Salary 
        FROM Departments 
        LEFT JOIN Employees ON Departments.ID = Employees.Department_Id 
        GROUP BY Departments.ID, Departments.Name
    `
};