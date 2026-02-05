import React from 'react';
import { Header } from '../components/Header';
import { ProductList } from '../components/products/ProductList';
import { ProductSection } from '../components/products/ProductSection';

const ProductsPage = () => {
  return (
    <div className="layout__container">
      <Header />
      <div className="welcome">
        <p className="welcome__greeting">Hi Mr. Michael,</p>
        <h1 className="welcome__title">Welcome Back!</h1>
      </div>
      <ProductSection>
        <ProductList />
      </ProductSection>
    </div>
  );
};

export default ProductsPage;
