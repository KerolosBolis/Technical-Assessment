import db from '../db.js';

export const getSalarySumByDept = async (req, res) => {
    try {
        const query = `
            SELECT departments.ID, departments.Name, IFNULL(SUM(employees.Salary),0) AS Total_Salary 
            FROM Departments 
            LEFT JOIN Employees ON Departments.ID = Employees.Department_Id 
            GROUP BY Departments.ID, Departments.Name;
        `;
        const [rows] = await db.query(query);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};