import db from '../db.js';

export const getAllOrders = async (req, res) => {
    try {
        const query = `
            SELECT orders.ID, orders.Product_Id, products.Name 
            FROM Orders orders 
            JOIN Products products ON orders.Product_Id = products.ID 
            ORDER BY orders.ID DESC;
        `;
        const [rows] = await db.query(query);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};