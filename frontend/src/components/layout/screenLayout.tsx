import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next';
import { ScreenLayoutProps } from '../../interfaces'
import CountdownTimer from '../timer'
import ImageBackground from './components/imageBackground'
import i18n from '../../i18n'
import useTranslate  from '../../hooks/useTranslate'

const ScreenLayout = ({
  children,
  image,
  showTimer = true,
  timerInitialTime = 60,
}: ScreenLayoutProps) => {
  const { changeLanguage, currentLanguage } = useTranslate();

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || currentLanguage;
    changeLanguage(storedLanguage);
  }, [currentLanguage, changeLanguage]);

  return (
    <I18nextProvider i18n={i18n}>
      {image && <ImageBackground url={image} />}
      <div className="relative z-10 h-screen">
        {children}
        {showTimer && <CountdownTimer initialTime={timerInitialTime} />}
      </div>
    </I18nextProvider>
  )
}

export default ScreenLayout
