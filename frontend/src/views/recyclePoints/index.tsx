import BackButton from '../../components/backButton'
import RecyclePointsList from './components/recyclePointsList'
import ScreenLayout from '../../components/layout/screenLayout'
import useTranslate from '../../hooks/useTranslate'
import i18n from '../../i18n'

const RecyclePoints = () => {
  
  const { t } = useTranslate();
  console.log('Idioma actual:', i18n.language);


  return (
    <ScreenLayout image="RewardsBackground.svg">
      <div className="flex flex-col justify-center items-center gap-11 h-screen z-10">
        <BackButton url="/rewards" />
        <h1 className="text-8xl text-center uppercase max-w-[800px] font-bold tracking-wider z-10">
          {t('recyclePoits.title')}
        </h1>
        <RecyclePointsList />
      </div>
    </ScreenLayout>
  )
}

export default RecyclePoints
