import React from 'react';
import { formatPrice } from '../../utils/price';
import { useStockPrice } from '../../hooks/useStockPrice';

const SkuInfo = ({ sku, brand, origin }) => {
  const { stockPrice } = useStockPrice(sku);

  return (
    <div className="product-detail__info">
      <div className="product-detail__name-wrapper">
        <h2 className="product-detail__name">{brand}</h2>
        <span className="product-detail__price">
          {formatPrice(stockPrice?.price)}
        </span>
      </div>
      <div className="product-detail__meta">
        <span>Origin: {origin}</span>
        <span>|</span>
        <span>Stock: {stockPrice?.stock ?? 'N/A'}</span>
      </div>
    </div>
  );
};

export { SkuInfo };
