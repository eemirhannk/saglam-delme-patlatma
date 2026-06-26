'use client';

import React, { useCallback, useEffect, useState } from 'react';
import LocaleLink from '@/i18n/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import Logo from './Logo';
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher';

const MOBILE_BREAKPOINT = 1199.98;

function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const closeMobileMenu = useCallback(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => {
      if (prev) setIsServicesOpen(false);
      return !prev;
    });
  };

  const handleServicesClick = (e) => {
    if (!isMobile) return;
    e.preventDefault();
    setIsServicesOpen((prev) => !prev);
  };

  const handleNavLinkClick = () => {
    if (isMobile) closeMobileMenu();
  };

  return (
    <nav className="navbar navbar-expand-xl navbar-dark navbar-custom navbar-scrolled">
      <div className="container-custom">
        <div className="navbar-header">
          <LocaleLink className="navbar-brand" href="/" onClick={handleNavLinkClick}>
            <Logo />
          </LocaleLink>
          {isMobile && (
            <button
              className={`navbar-toggler${isMenuOpen ? '' : ' collapsed'}`}
              type="button"
              aria-controls="navbarNav"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars navbar-toggler-icon"></i>
            </button>
          )}
        </div>
        <div
          className={`collapse navbar-collapse${isMobile && isMenuOpen ? ' show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className={`nav-item dropdown${isMobile && isServicesOpen ? ' show' : ''}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                aria-expanded={isMobile ? isServicesOpen : false}
                {...(!isMobile && { 'data-bs-toggle': 'dropdown' })}
                onClick={handleServicesClick}
              >
                {t('navbar.services')}
              </a>
              <ul
                className={`dropdown-menu${isMobile && isServicesOpen ? ' show' : ''}`}
                aria-labelledby="servicesDropdown"
              >
                <li>
                  <LocaleLink className="dropdown-item" href="/consulting" onClick={handleNavLinkClick}>
                    {t('navbar.consulting')}
                  </LocaleLink>
                </li>
                <li>
                  <LocaleLink className="dropdown-item" href="/drilling-services" onClick={handleNavLinkClick}>
                    {t('navbar.drilling')}
                  </LocaleLink>
                </li>
                <li>
                  <LocaleLink className="dropdown-item" href="/blasting-services" onClick={handleNavLinkClick}>
                    {t('navbar.blasting')}
                  </LocaleLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <LocaleLink className="nav-link" href="/about" onClick={handleNavLinkClick}>
                {t('navbar.about')}
              </LocaleLink>
            </li>
            <li className="nav-item">
              <LocaleLink className="nav-link" href="/team" onClick={handleNavLinkClick}>
                {t('navbar.team')}
              </LocaleLink>
            </li>
            <li className="nav-item">
              <LocaleLink className="nav-link" href="/faq" onClick={handleNavLinkClick}>
                {t('navbar.faq')}
              </LocaleLink>
            </li>
            <li className="nav-item">
              <LocaleLink className="nav-link" href="/contact" onClick={handleNavLinkClick}>
                {t('navbar.contact')}
              </LocaleLink>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.researchgate.net/profile/Riza-Saglam?ev=hdr_xprf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavLinkClick}
              >
                {t('navbar.publications')}
              </a>
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
