import React from 'react';
import { ProductCard } from './ProductCard';
import { useProducts } from '../../context/useProducts';
import { ProductCardSkeleton } from './ProductCardSkeleton';

const mockData = new Array(5)
  .fill(null)
  .reduce((acc, _, index) => [...acc, { id: index }], []);

const SkeletonFallback = () =>
  mockData.map((item) => <ProductCardSkeleton key={item.id} />);

const ProductList = () => {
  const { products, isLoading, isFetching } = useProducts();

  if (isLoading || isFetching) {
    return <SkeletonFallback />;
  }

  if (!products || products.length === 0) {
    return <p className="products__empty">No products available.</p>;
  }

  return products?.map((product) => (
    <ProductCard
      key={product.id}
      brand={product.brand}
      image={product.image}
      id={product.id}
      price={product.price}
    />
  ));
};

export { ProductList };
