import React from 'react';
import { useNavigate } from 'react-router';
import { featureAlert } from '../../utils/alert';
import { EllipsisIcon } from '../../assets/components/EllipsisIcon';
import { LeftArrowIcon } from '../../assets/components/LeftArrowIcon';

const DetailsHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="product-detail__header">
      <button
        className="product-detail__header__back-btn"
        onClick={() => navigate(-1)}
        aria-label="Go back to products"
      >
        <LeftArrowIcon />
      </button>
      <h1 className="product-detail__header__title">Detail</h1>
      <button
        className="product-detail__header__menu-btn"
        onClick={featureAlert}
        aria-label="Open product menu"
      >
        <EllipsisIcon />
      </button>
    </header>
  );
};

export { DetailsHeader };
