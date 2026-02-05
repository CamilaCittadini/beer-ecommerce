import products from '../data/products.js';
import stockPrice from '../data/stock-price.js';

export function getProducts(_, res) {
  try {
    const productsWithPrices = products.map((product) => {
      const sku = product.skus?.[0]?.code;
      if (!sku) {
        return { ...product, price: null };
      }

      const priceInfo = stockPrice[sku];
      const price = priceInfo?.price ?? null;

      return { ...product, price };
    });

    res.status(200).json(productsWithPrices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
