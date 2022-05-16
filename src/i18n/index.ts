import i18n from 'i18next';
import enText from './lang/en';
import jaText from './lang/ja';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    translation: enText
  },
  ja: {
    translation: jaText
  }
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  resources
});

export default i18n;
