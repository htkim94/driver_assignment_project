import express from 'express';
import { getOrders, updateOrder, moveOrder, deleteOrder } from '../controllers/orders.js';

const router = express.Router();

//localhost:5050/orders
router.get('/', getOrders);

router.post('/', moveOrder);

router.post('/updateOrder', updateOrder);

router.delete('/deleteOrder', deleteOrder);

export default router;