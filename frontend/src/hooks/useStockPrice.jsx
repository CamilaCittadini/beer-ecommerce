import React from 'react';
import { getStockPrice } from '../services/products';
import { useQuery } from '@tanstack/react-query';

const useStockPrice = (sku) => {
  const { data: stockPrice, isFetching } = useQuery({
    queryKey: ['stock-price', sku],
    queryFn: () => getStockPrice(sku),
    enabled: !!sku,
    refetchInterval: 5000,
  });
  return { stockPrice, isFetching };
};

export { useStockPrice };
