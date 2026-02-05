import React from 'react';
import { PlusIcon } from '../../assets/components/PlusIcon';
import { useNavigate } from 'react-router';
import { formatPrice } from '../../utils/price';
import { getImgSrc } from '../../utils/image';

const ProductCard = ({ brand, image, id, price }) => {
  const navigate = useNavigate();

  const imgSrc = getImgSrc(image);

  return (
    <div className="product-card">
      <h3 className="product-card__name">{brand}</h3>
      <img src={imgSrc} alt={brand} className="product-card__image" />
      <div className="product-card__price-section">
        <span className="product-card__price">{formatPrice(price)}</span>
        <button
          className="product-card__more-btn"
          onClick={() =>
            navigate(
              `/product/${id}-${brand.toLowerCase().replaceAll(' ', '-')}`
            )
          }
          aria-label={`View details for ${brand}`}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export { ProductCard };
