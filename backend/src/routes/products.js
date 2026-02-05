import express from 'express';
import { getProducts } from '../controllers/products.js';

const router = express.Router();
const route = '/';
router.get(route, getProducts);

export default router;
