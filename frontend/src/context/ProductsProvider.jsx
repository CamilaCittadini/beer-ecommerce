import React, { useMemo, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../services/products';
import { ProductsContext } from './ProductsContext';

const ProductsProvider = ({ children }) => {
  const {
    data: products = [],
    isLoading,
    isFetching,
    isSuccess,
  } = useQuery({
    queryKey: ['get-products'],
    queryFn: getProducts,
  });

  const getProductById = useCallback(
    (id) => products?.find((product) => product.id === Number(id)) || {},
    [products]
  );

  const value = useMemo(
    () => ({
      products,
      isLoading,
      isFetching,
      getProductById,
      isSuccess,
    }),
    [products, isLoading, isFetching, getProductById, isSuccess]
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider };
