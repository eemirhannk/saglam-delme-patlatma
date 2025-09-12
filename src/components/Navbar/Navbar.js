import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import Logo from './Logo';
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher';

function Navbar() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1199.98);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  useEffect(() => {
    // Mobil dropdown toggle işlevselliği
    const handleDropdownClick = (e) => {
      if (window.innerWidth <= 1199.98) {
        e.preventDefault();
        const dropdown = e.target.closest('.dropdown');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        // Diğer dropdown'ları kapat
        document.querySelectorAll('.dropdown').forEach(d => {
          if (d !== dropdown) {
            d.classList.remove('show');
          }
        });
        
        // Mevcut dropdown'ı toggle et
        dropdown.classList.toggle('show');
      }
    };

    // Dropdown toggle'lara click listener'ları ekle
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', handleDropdownClick);
    });

    // Dışarı tıklandığında dropdown'ları kapat
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
          dropdown.classList.remove('show');
        });
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      dropdownToggles.forEach(toggle => {
        toggle.removeEventListener('click', handleDropdownClick);
      });
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  return (
    <nav className="navbar navbar-expand-xl navbar-dark navbar-custom navbar-scrolled">
      <div className="container-custom">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <Logo />
          </Link>
          {isMobile && (
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars navbar-toggler-icon"></i>
            </button>
          )}
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="servicesDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                {t('navbar.services')}
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><Link className="dropdown-item" to="/consulting">{t('navbar.consulting')}</Link></li>
                <li><Link className="dropdown-item" to="/drilling-services">{t('navbar.drilling')}</Link></li>
                <li><Link className="dropdown-item" to="/blasting-services">{t('navbar.blasting')}</Link></li>
                <li><Link className="dropdown-item" to="/project-management">{t('navbar.projectManagement')}</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{t('navbar.about')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">{t('navbar.team')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">{t('navbar.contact')}</Link>
            </li>
            <li className="nav-item">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
