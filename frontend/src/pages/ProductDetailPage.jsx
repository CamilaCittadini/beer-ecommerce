import React from 'react';

import { DetailsHeader } from '../components/product-details/DetailsHeader';
import { ProductDetail } from '../components/product-details/ProductDetail';

const ProductDetailPage = () => {
  return (
    <div className="layout__container  layout__container--product-detail">
      <DetailsHeader />
      <ProductDetail />
    </div>
  );
};

export default ProductDetailPage;
