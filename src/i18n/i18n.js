import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { tr, en } from './resources';

if (typeof window !== 'undefined') {
  i18n.use(LanguageDetector);
}

i18n.use(initReactI18next).init({
  resources: {
    tr,
    en,
  },
  lng: 'tr',
  fallbackLng: 'tr',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  detection:
    typeof window !== 'undefined'
      ? {
          order: ['localStorage', 'navigator', 'htmlTag'],
          caches: ['localStorage'],
        }
      : undefined,
});

export default i18n;

export { tr, en };
