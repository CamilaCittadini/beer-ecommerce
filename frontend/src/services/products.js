import axios from 'axios';

const url = '/api/products';
const stockPriceUrl = '/api/stock-price';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}${url}`);
    return response.data;
  } catch (error) {
    console.log('error fetching products', error);
    alert(error.message);
    throw error;
  }
};

export const getStockPrice = async (sku) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}${stockPriceUrl}/${sku}`
    );
    return response.data;
  } catch (error) {
    console.log('error fetching stock-price', error);
    alert(error.message);
    throw error;
  }
};
