import React from 'react';
import { HamburgerMenuIcon } from '../assets/components/HamburgerMenuIcon';
import { featureAlert } from '../utils/alert';

const API_URL = import.meta.env.VITE_API_URL ?? '';

const Header = () => {
  const imgSrc = `${API_URL}/users/user.jpg`;

  return (
    <header className="header">
      <button
        className="header__menu-btn"
        onClick={featureAlert}
        aria-label="Open main menu"
      >
        <HamburgerMenuIcon />
      </button>

      <img src={imgSrc} alt="Profile picture" className="header__profile-pic" />
    </header>
  );
};

export { Header };
