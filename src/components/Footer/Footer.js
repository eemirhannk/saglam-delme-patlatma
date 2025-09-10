import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-custom py-4">
      <div className="container-custom">
        <div className="footer-content">
          <div className="footer-section footer-contact-section">
            <h6 className="footer-subtitle">İletişim</h6>
            <div className="footer-contact">
              <p className="footer-contact-item">
                <i className="fas fa-phone"></i>
                +90 (XXX) XXX XX XX
              </p>
              <p className="footer-contact-item">
                <i className="fas fa-envelope"></i>
                info@saglamdelme.com
              </p>
              <p className="footer-contact-item">
                <i className="fas fa-map-marker-alt"></i>
                Tığcılar Mahallesi Pamuklar<br />
                Sokak No : 14 İç Kapı No: 302<br />
                Adapazarı / SAKARYA
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2025 Sağlam Delme & Patlatma. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
