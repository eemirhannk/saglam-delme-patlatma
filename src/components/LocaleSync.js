'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function LocaleSync({ locale, children }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  return children;
}
