'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import OptimizedImage from '@/components/OptimizedImage';
import './Logo.css';

function Logo() {
  const { t } = useTranslation();
  return (
    <div className="logo-container">
      <OptimizedImage
        src="/images/Logo/logo.webp"
        alt={t('images.companyLogo')}
        className="logo-img"
        width={200}
        height={60}
        priority
      />
      <div className="logo-tagline">
      "{t('navbar.tagline')}"
      </div>
    </div>
  );
}

export default Logo;