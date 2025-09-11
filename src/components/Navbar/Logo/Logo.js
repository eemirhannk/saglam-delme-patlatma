import React from 'react';
import { useTranslation } from 'react-i18next';
import './Logo.css';
import logoImage from '@public/images/logo.jpeg';

function Logo() {
  const { t } = useTranslation();
  return (
    <div className="logo-container">
      <img src={logoImage} alt={t('images.companyLogo')} className="logo-img" />
      <div className="logo-tagline">
      "{t('navbar.tagline')}"
      </div>
    </div>
  );
}

export default Logo;