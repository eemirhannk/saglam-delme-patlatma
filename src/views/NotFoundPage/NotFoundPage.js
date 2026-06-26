'use client';

import React from 'react';
import LocaleLink from '@/i18n/navigation';
import OptimizedImage from '@/components/OptimizedImage';
import { useTranslation } from 'react-i18next';
import './NotFoundPage.css';

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="not-found-image">
            <OptimizedImage
              src="/images/NotFoundPage/ALT YARI PATLATMA SONRASI GÖRÜNÜM.webp"
              alt={t('notFound.imageAlt')}
              className="not-found-img"
              fill
              sizes="100vw"
            />
          </div>
          <div className="not-found-overlay"></div>
          <div className="not-found-text">
            <h1 className="not-found-title">404</h1>
            <h2 className="not-found-subtitle">{t('notFound.title')}</h2>
            <p className="not-found-description">{t('notFound.description')}</p>
            <div className="not-found-actions">
              <LocaleLink href="/" className="btn btn-primary not-found-btn">
                {t('notFound.homeButton')}
              </LocaleLink>
              <LocaleLink href="/contact" className="btn btn-outline-primary not-found-btn">
                {t('notFound.contactButton')}
              </LocaleLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
