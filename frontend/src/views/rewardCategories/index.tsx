import type { RewardCategory } from '../../interfaces'
import BackButton from '../../components/backButton'
import ListRewards from './components/listRewards'
import Modal from './components/modal'
import ScreenLayout from '../../components/layout/screenLayout'
import useTranslate from '../../hooks/useTranslate'

const RewardCategories = () => {
  const { t } = useTranslate()

  const rewards: RewardCategory[] = [
    {
      id: 1,
      name: 'Donativos',
      order: 1,
      status: true,
      image: '/images/QRcode.png',
      url: '/rewards/donative',
    },
    {
      id: 2,
      name: 'Servicios',
      order: 2,
      status: true,
      image: '/images/QRcode.png',
      url: '/rewards/service',
    },
  ]

  return (
    <ScreenLayout image="shrubbery.png" timerInitialTime={30}>
      <div className="flex flex-col justify-center items-center gap-11 h-screen select-none">
        <BackButton url="/reward_categories" />
        <h1 className="text-8xl z-10 text-center uppercase max-w-[900px] font-bold tracking-wider mb-20">
          {t('rewards.description')}
        </h1>
        <ListRewards categories={rewards} />
      </div>
      <Modal />
    </ScreenLayout>
  )
}

export default RewardCategories
