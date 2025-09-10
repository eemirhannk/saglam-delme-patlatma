import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo';

function Navbar() {
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
    // Mobile dropdown toggle functionality
    const handleDropdownClick = (e) => {
      if (window.innerWidth <= 1199.98) {
        e.preventDefault();
        const dropdown = e.target.closest('.dropdown');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        // Close other dropdowns
        document.querySelectorAll('.dropdown').forEach(d => {
          if (d !== dropdown) {
            d.classList.remove('show');
          }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle('show');
      }
    };

    // Add click listeners to dropdown toggles
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', handleDropdownClick);
    });

    // Close dropdowns when clicking outside
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
              <span className="navbar-toggler-icon"></span>
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
                Hizmetlerimiz
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><Link className="dropdown-item" to="/danismanlik">Danışmanlık</Link></li>
                <li><Link className="dropdown-item" to="/delme-hizmetleri">Delme Hizmetleri</Link></li>
                <li><Link className="dropdown-item" to="/patlatma-hizmetleri">Patlatma Hizmetleri</Link></li>
                <li><Link className="dropdown-item" to="/proje-yonetimi">Proje Yönetimi</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hakkimizda">Hakkımızda</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projelerimiz">Projelerimiz</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/iletisim">İletişim</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
