import express from 'express';
import { getStockPrice } from '../controllers/stock-price.js';

const router = express.Router();
const route = '/:sku';
router.get(route, getStockPrice);

export default router;
