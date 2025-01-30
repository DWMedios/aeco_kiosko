import { useTranslation } from 'react-i18next';

const useTranslate = () => {
  const { t, i18n } = useTranslation();

  console.log("Idioma actual:", i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return { t, changeLanguage, currentLanguage: i18n.language };
};

export default useTranslate;
