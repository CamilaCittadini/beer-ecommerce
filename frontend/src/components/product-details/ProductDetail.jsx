import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useProducts } from '../../context/useProducts';
import { getImgSrc } from '../../utils/image';
import { SkuInfo } from './SkuInfo';
import { CallToAction } from './CallToAction';

const ProductDetail = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const { slug } = useParams();
  const { getProductById, isSuccess } = useProducts();
  const id = slug?.split('-')?.[0] || '';
  const product = getProductById(id);

  const setInitialSku = () => product?.skus?.[0]?.code || null;
  const [selectedSku, setSelectedSku] = useState(setInitialSku);
  const isEmpty = Object.keys(product).length === 0;

  useEffect(() => {
    if (!selectedSku && product?.skus?.length > 0) {
      setSelectedSku(product.skus[0]?.code);
    }
  }, [product, selectedSku]);

  useEffect(() => {
    if (isSuccess && id && isEmpty) {
      window.alert('The product you searched for is not available.');
      navigate('/products');
    }
  }, [id, isSuccess, navigate, isEmpty]);

  const imgSrc = getImgSrc(product?.image);

  if (isEmpty) {
    return (
      <p className="product-detail__error">
        <h1 className="product-detail__error__title">Oops! </h1>
        <h2 className="product-detail__error__reason">
          The product you searched for is not available
        </h2>
      </p>
    );
  }
  return (
    <>
      <div className="product-detail__image-container">
        <img
          src={imgSrc}
          alt={product.brand}
          className="product-detail__image"
        />
      </div>
      <div className="product-detail__content">
        <SkuInfo
          sku={selectedSku}
          brand={product.brand}
          origin={product.origin}
        />

        <div className="product-detail__description">
          <h3 className="product-detail__description-title">Description</h3>
          <p
            className={`product-detail__description-text ${
              isExpanded ? 'is-expanded' : ''
            }`}
          >
            {product.information}
          </p>
          <button
            className="product-detail__read-more"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={
              isExpanded ? 'Collapse description' : 'Expand description'
            }
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        </div>
        <div className="product-detail__size-section">
          <h3 className="product-detail__size-title">Size</h3>
          <div className="product-detail__sku-options">
            {product.skus?.map((sku) => (
              <button
                key={sku.code}
                onClick={() => setSelectedSku(sku.code)}
                className={`product-detail__sku-btn ${
                  sku.code === selectedSku && 'product-detail__sku-btn--active'
                }`}
                aria-label={`Select ${sku.name}`}
                aria-pressed={sku.code === selectedSku}
              >
                {sku.name}
              </button>
            ))}
          </div>
        </div>
        <CallToAction id={id} skuCode={selectedSku} />
      </div>
    </>
  );
};

export { ProductDetail };
