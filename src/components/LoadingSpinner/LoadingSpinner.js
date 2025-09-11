import React from 'react';
import { useTranslation } from 'react-i18next';
import './LoadingSpinner.css';

function LoadingSpinner() {
  const { t } = useTranslation();
  
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">{t('loading.screenReader')}</span>
        </div>
        <p className="loading-text">{t('loading.text')}</p>
      </div>
    </div>
  );
}

export default LoadingSpinner;
