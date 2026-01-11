// routes/employeeRoutes.js
import express from 'express';
import { getEmployees } from '../controllers/employeeController.js';

const router = express.Router();

// The route "calls" the controller function
router.get('/employees', getEmployees);

export default router;