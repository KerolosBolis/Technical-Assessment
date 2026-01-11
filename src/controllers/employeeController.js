import db from '../db.js';

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT employees.ID, employees.Name, departments.Name AS Department 
            FROM employees 
            JOIN departments ON employees.Department_Id = departments.ID
        `);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

