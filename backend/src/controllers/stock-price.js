import stockPrice from '../data/stock-price.js';

export function getStockPrice(req, res) {
  try {
    const { sku } = req.params;
    if (!sku) {
      return res.status(400).json({ message: 'SKU is required' });
    }
    if (isNaN(Number(sku))) {
      return res.status(400).json({ message: 'SKU must be a number' });
    }
    const stockPriceItem = stockPrice[Number(sku)];

    if (!stockPriceItem) {
      return res
        .status(404)
        .json({ message: `Stock price not found for SKU: ${sku}` });
    }
    res.status(200).json(stockPriceItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
