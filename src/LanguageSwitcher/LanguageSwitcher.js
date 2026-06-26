'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { localizeHref, stripLocaleFromPath, useLocale } from '@/i18n/navigation';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [currentLanguage, setCurrentLanguage] = useState(locale);

  useEffect(() => {
    setCurrentLanguage(locale);
  }, [locale]);

  const changeLanguage = (lng) => {
    if (lng === currentLanguage) return;

    const pathWithoutLocale = stripLocaleFromPath(pathname);
    const nextPath = localizeHref(lng, pathWithoutLocale);

    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    router.push(nextPath);
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
