import express from 'express';
import { getDrivers } from '../controllers/drivers.js';

const router = express.Router();

//localhost:5050/drivers
router.get('/', getDrivers);

export default router;