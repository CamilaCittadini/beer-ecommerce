import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import cors from 'cors';
import productsRoutes from './routes/products.js';
import stockPriceRoutes from './routes/stock-price.js';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());

app.use(express.json());

const responseHeader = {
  maxAge: '7d',
  etag: true,
  lastModified: true,
};
app.use(
  '/products',
  express.static(
    path.join(__dirname, '..', 'public', 'products'),
    responseHeader
  )
);
app.use(
  '/users',
  express.static(path.join(__dirname, '..', 'public', 'users'), responseHeader)
);

app.use('/api/products', productsRoutes);
app.use('/api/stock-price', stockPriceRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
