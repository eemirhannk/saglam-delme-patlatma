import React from 'react';
import './Logo.css';
import logoImage from '@public/images/logo.jpeg';

function Logo() {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Sağlam Delme & Patlatma" className="logo-img" />
    </div>
  );
}

export default Logo;