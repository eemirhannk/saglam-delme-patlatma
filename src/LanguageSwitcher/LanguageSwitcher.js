import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('tr');

  useEffect(() => {
    // İlk yüklemede mevcut dili al
    const currentLang = i18n.language || 'tr';
    setCurrentLanguage(currentLang);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${currentLanguage === 'tr' ? 'active' : ''}`}
        onClick={() => changeLanguage('tr')}
        title="Türkçe"
      >
        TR
      </button>
      <span className="lang-separator">|</span>
      <button
        className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
        title="English"
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;
