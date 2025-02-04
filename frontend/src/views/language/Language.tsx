import { useState } from 'react'
import { usePageData } from '../../hooks/usePageData'
import useTranslate from '../../hooks/useTranslate'

import {
  BackgroundButtonEnum,
  BorderColorEnum,
  BorderRadiusEnum,
  FontSizeEnum,
  MetaDataLanguage,
  TextColorEnum,
} from '../../interfaces'

import BackButton from '../../components/backButton'
import Button from '../../components/button'
import ScreenLayout from '../../components/layout/screenLayout'

function Language() {
  const { t, changeLanguage} = useTranslate()
  const [selectedLanguage, setSelectedLanguage] = useState<string>('es')


  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLanguage(event.target.value)
  }

  const handleStartClick = () => {
    changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  const {
    data: metas,
    loading,
    error,
  } = usePageData<MetaDataLanguage>('Language')

  if (loading || error || !metas) {
    return (
      <div>
        {loading
          ? 'Loading...'
          : error
            ? `Error: ${error}`
            : 'No metadata available'}
      </div>
    )
  }

  return (
    <>
      <ScreenLayout image={metas.imgBg}>
        <div className="p-4 h-screen flex flex-col items-center justify-center gap-11 select-none">
          <BackButton url="/home" />
          <h1 className="text-center text-7xl mt-20 mb-5 z-10">
           {t('language.selectLanguage')} 
          </h1>
          <form className="flex flex-col justify-center items-center space-y-4 z-10">
            <label className="flex items-center text-5xl  text-center p-6 tracking-wider">
              <input
                type="radio"
                name="language"
                value="es"
                checked={selectedLanguage === 'es'}
                onChange={handleLanguageChange}
                className="hidden"
              />
              <span
                className={`cursor-pointer py-6 px-4 rounded-full w-80 font-medium ${
                  selectedLanguage === 'es'
                    ? 'bg-[#90c9ac] text-black'
                    : 'bg-white'
                }`}
                onClick={() => setSelectedLanguage('es')}
              >
               {t('Spanish')}
              </span>
            </label>

            <label className="flex items-center text-5xl text-center p-6 tracking-wider">
              <input
                type="radio"
                name="language"
                value="en"
                checked={selectedLanguage === 'en'}
                onChange={handleLanguageChange}
                className="hidden"
              />
              <span className={`cursor-pointer py-6 px-4 normal-case rounded-full w-80 font-medium ${
                  selectedLanguage === 'en'
                    ? 'bg-[#90c9ac] text-black'
                    : 'bg-white'
                }`}
                onClick={() => setSelectedLanguage('en')}
              >
                {t('English')}
              </span>
            </label>
          </form>
          <div className="flex justify-center mt-8 w-full">
            <Button
              label={metas.button.labelEs}
              url={metas.button.url}
              borderRadius={
                BorderRadiusEnum[
                  metas.button.borderRadious as keyof typeof BorderRadiusEnum
                ]
              }
              fontSize={
                FontSizeEnum[metas.button.fontSize as keyof typeof FontSizeEnum]
              }
              textColor={
                TextColorEnum[
                  metas.button.textColor as keyof typeof TextColorEnum
                ]
              }
              bgColor={
                BackgroundButtonEnum[
                  metas.button.bgColor as keyof typeof BackgroundButtonEnum
                ]
              }
              borderColor={
                BorderColorEnum[
                  metas.button.borderColor as keyof typeof BorderColorEnum
                ]
              }
              action={handleStartClick}
            />
          </div>
        </div>
      </ScreenLayout>
    </>
  )
}

export default Language
