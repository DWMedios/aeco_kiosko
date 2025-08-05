import type { RewardCategory } from '../../interfaces'
import BackButton from '../../components/backButton'
import ListRewards from './components/listRewards'
import Modal from './components/modal'
import ScreenLayout from '../../components/layout/screenLayout'
import useTranslate from '../../hooks/useTranslate'
import { useEffect, useState } from 'react'
import WebApiAeco from '../../api/webApiAeco'

const RewardCategories = () => {
  const { t } = useTranslate()
  const [rewards, setRewards] = useState<RewardCategory[]>([])

  const getRewardsByType = async () => {
    try {
      const response: any = await WebApiAeco.getRewardCategories()

      const rewardCategories = response.map(
        (reward: Record<string, any>, i: number) => {
          return {
            name: t(`rewards.${reward.type}`),
            order: i + 1,
            status: true,
            image: '/images/donations.png',
            url: `/rewards/${reward.type}`,
          }
        },
      )
      setRewards(rewardCategories)
    } catch (error) {
      throw new Error('Error getting subcategories')
    }
  }

  useEffect(() => {
    getRewardsByType()
  }, [])

  return (
    <ScreenLayout image="shrubbery.png" timerInitialTime={30}>
      <div className="flex flex-col justify-center items-center gap-11 h-screen select-none">
        <BackButton url="/reward_categories" />
        <h1 className="text-6xl z-10 text-center uppercase max-w-[900px] font-bold tracking-wider mb-20">
          ¡Gracias por tu colaboración!
          {/* {t('rewards.description')} */}
        </h1>
        <ListRewards categories={rewards} />
      </div>
      <Modal />
    </ScreenLayout>
  )
}

export default RewardCategories
