import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enJSON from '../locale/en.json'
import spJSON from '../locale/sp.json'

const savedLanguage = localStorage.getItem('language') || 'es';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enJSON },
    es: { translation: spJSON },
  },
  lng: savedLanguage,
  fallbackLng: 'es',
  interpolation: { escapeValue: false }

});

export default i18n;
