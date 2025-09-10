import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark navbar-custom navbar-scrolled">
      <div className="container-custom">
        <Link className="navbar-brand" to="/">
          <Logo />
        </Link>
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
