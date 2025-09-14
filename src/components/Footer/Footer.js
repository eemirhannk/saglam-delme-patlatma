import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer-custom py-4">
      <div className="container-custom">
        <div className="footer-content">
          <div className="footer-section footer-contact-section">
            <div className="footer-contact">
              <p className="footer-contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:saglamtrcom@gmail.com" className="footer-email-link">
                  saglamtrcom@gmail.com
                </a>
              </p>
              <p className="footer-contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span dangerouslySetInnerHTML={{ __html: t('footer.address') }} />
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/sağlam-delme-patlatma-ltd-şti-16ba21383/" target="_blank" rel="me noopener noreferrer" className="social-link" aria-label="LinkedIn Profilimiz">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://x.com/saglamtrcom" target="_blank" rel="me noopener noreferrer" className="social-link" aria-label="Twitter Profilimiz">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/saglamtrcom/" target="_blank" rel="me noopener noreferrer" className="social-link" aria-label="Instagram Profilimiz">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="footer-copyright">
            <p>{t('footer.copyrightFull')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
