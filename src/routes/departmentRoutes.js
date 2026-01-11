import express from 'express';
import { getSalarySumByDept } from '../controllers/departmentController.js';

const router = express.Router();

router.get('/salary-sum', getSalarySumByDept);

export default router;