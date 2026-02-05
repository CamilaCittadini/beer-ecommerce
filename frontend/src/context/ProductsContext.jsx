import { createContext } from 'react';

export const ProductsContext = createContext({
  products: [],
  isLoading: true,
  isFetching: false,
  getProductById: () => {},
});
