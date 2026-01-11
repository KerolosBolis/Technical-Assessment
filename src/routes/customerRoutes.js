import express from 'express';
import { getAllCustomers } from '../controllers/customerController.js';

const router = express.Router();

router.get('/customers', getAllCustomers);

export default router;