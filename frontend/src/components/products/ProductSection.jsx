import React, { Suspense } from 'react';
import { ProductCardSkeleton } from './ProductCardSkeleton';

const ProductSection = ({ children }) => {
  if (!React.Children.count(children)) {
    return null;
  }

  return (
    <section className="products">
      <h2 className="products__title">Our Products</h2>
      <div className="products__grid">{children}</div>
    </section>
  );
};

export { ProductSection };
