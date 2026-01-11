import db from '../db.js';

export const getAllCustomers = async (req, res) => {
    try {
        const query = `
            SELECT customers.ID, customers.Name, orders.ID AS Order_ID, orders.Amount, 
            products.Name AS Product_Name, (orders.Amount * products.Cost) AS Total_Cost 
            FROM Customers 
            LEFT JOIN Orders ON customers.ID = orders.Customer_Id 
            LEFT JOIN Products ON orders.Product_Id = products.ID;
        `;
        const [rows] = await db.query(query);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};