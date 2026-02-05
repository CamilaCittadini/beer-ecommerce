import { useContext } from 'react';
import { ProductsContext } from './ProductsContext';

const useProducts = () => {
  const context = useContext(ProductsContext);
  return context;
};

export { useProducts };
