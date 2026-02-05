import React from 'react';
import { ShopIcon } from '../../assets/components/ShopIcon';
import { featureAlert } from '../../utils/alert';

const CallToAction = ({ id, skuCode }) => {
  return (
    <div className="product-detail__actions">
      <button
        className="product-detail__save-btn"
        onClick={featureAlert}
        aria-label="Save product for later"
      >
        <ShopIcon />
      </button>
      <button
        className="product-detail__add-to-cart-btn"
        onClick={() =>
          featureAlert({
            message: `Add to cart payload: { productId: ${id}, sku:${skuCode}, quantity:1 }`,
          })
        }
        aria-label={`Add ${skuCode} to cart`}
      >
        Add to cart
      </button>
    </div>
  );
};

export { CallToAction };
