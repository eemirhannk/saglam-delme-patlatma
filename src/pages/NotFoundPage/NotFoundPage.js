import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO/SEO';
import './NotFoundPage.css';
import notFoundImage from '@public/images/NotFoundPage/ALT YARI PATLATMA SONRASI GÖRÜNÜM.webp';

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title="404 - Sayfa Bulunamadı | Sağlam Delme & Patlatma"
        description="Aradığınız sayfa bulunamadı. Sağlam Delme & Patlatma'nın ana sayfasına dönebilir veya iletişim sayfamızdan bize ulaşabilirsiniz."
        keywords="404, sayfa bulunamadı, hata sayfası, delme patlatma, ana sayfa, iletişim"
        image="/images/NotFoundPage/ALT YARI PATLATMA SONRASI GÖRÜNÜM.webp"
        url="/404"
        type="website"
      />
      
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="not-found-image">
            <img 
              src={notFoundImage} 
              alt={t('notFound.imageAlt')} 
              className="not-found-img"
            />
          </div>
          <div className="not-found-overlay"></div>
          <div className="not-found-text">
            <h1 className="not-found-title">404</h1>
            <h2 className="not-found-subtitle">{t('notFound.title')}</h2>
            <p className="not-found-description">{t('notFound.description')}</p>
            <div className="not-found-actions">
              <Link to="/" className="btn btn-primary not-found-btn">
                {t('notFound.homeButton')}
              </Link>
              <Link to="/contact" className="btn btn-outline-primary not-found-btn">
                {t('notFound.contactButton')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
