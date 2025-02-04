import { useEffect, useState } from 'react'
import BackButton from '../../components/backButton'
import ListRewards from './components/listRewards'
import Modal from './components/modal'
import ScreenLayout from '../../components/layout/screenLayout'
import WebApiAeco from '../../api/webApiAeco'
import type { RewardCategory } from '../../interfaces'
import useTranslate from '../../hooks/useTranslate'

const Rewards = () => {
  const { t } = useTranslate();
  const [rewards, setRewards] = useState<RewardCategory[]>([])

  const fetchRewards = async () => {
    try {
      const response = await WebApiAeco.getRewardCaterories()
      if (!response) {
        throw new Error('Not found')
      }
      setRewards(response)
    } catch (error) {
      throw new Error('Error when obtaining reward categories')
    }
  }

  useEffect(() => {
    fetchRewards()
  }, [])

  return (
      <ScreenLayout image="shrubbery.png" timerInitialTime={30}>
      <div className="flex flex-col justify-center items-center gap-11 h-screen select-none">
        <BackButton url="/example" />
        <h1 className="text-8xl z-10 text-center uppercase max-w-[900px] font-bold tracking-wider mb-20">
          {t('chooseYourReward')}
        </h1>
        <ListRewards categories={rewards} />
      </div>
      <Modal />
    </ScreenLayout>
  )
}

export default Rewards
