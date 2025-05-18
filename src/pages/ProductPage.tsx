import React from 'react';
import ProductDetails from '../components/product/ProductDetails';
import ProductInfo from '../components/product/ProductInfo';
import FAQ from '../components/product/FAQ';

const ProductPage: React.FC = () => {
  return (
    <>
      <ProductDetails />
      <ProductInfo />
      <FAQ />
    </>
  );
};

export default ProductPage;