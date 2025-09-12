import React from 'react';
import { useTranslation } from 'react-i18next';
import './LoadingSpinner.css';
import Logo from '../Navbar/Logo/Logo';

function LoadingSpinner() {
  const { t } = useTranslation();
  
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner">
        <div className="logo-loading">
          <Logo />
          <div className="loading-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
