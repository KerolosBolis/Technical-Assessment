import express from 'express';
import employeeRoutes from './routes/employeeRoutes.js';
import customerRoutes from './routes/customerRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import departmentRoutes from './routes/departmentRoutes.js';

const app = express();
app.use(express.json());

// Everything is prefixed with /api
app.use('/api', employeeRoutes);
app.use('/api', customerRoutes);
app.use('/api', orderRoutes);
app.use('/api', departmentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});