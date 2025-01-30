import BackButton from '../../components/backButton'
import PredialList from './components/predialList'
import ScreenLayout from '../../components/layout/screenLayout'
import useTranslate from '../../hooks/useTranslate'
import i18n from '../../i18n'

const PredialPoints = () => {
  const { t } = useTranslate();
  console.log('Idioma actual:', i18n.language);


  return (
    <ScreenLayout image="shrubbery.png">
      <div className="flex flex-col justify-center items-center h-screen gap-11">
        <BackButton imageSrc="/images/backbutton.png" url="/rewards" />
        <h1 className="text-8xl text-center uppercase max-w-[800px] font-bold tracking-wider">
          {t('predial.title')}
        </h1>
        <PredialList />
      </div>
    </ScreenLayout>
  )
}

export default PredialPoints
