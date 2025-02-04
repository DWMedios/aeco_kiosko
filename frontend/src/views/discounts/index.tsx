import BackButton from '../../components/backButton'
import ListDiscounts from './components/listDiscounts'
import ScreenLayout from '../../components/layout/screenLayout'
import useTranslate from '../../hooks/useTranslate'

const Discounts = () => {

  const { t } = useTranslate();

  return (
    <ScreenLayout image="shrubbery.png" timerInitialTime={30}>
      <div className="flex flex-col justify-center items-center gap-11 h-screen select-none">
        <BackButton url="/rewards" />
        <h1 className="text-8xl text-center uppercase max-w-[900px] font-bold tracking-wider mb-20">
          {t('discounts.title')}
        </h1>
        <ListDiscounts />
      </div>
    </ScreenLayout>
  )
}

export default Discounts
