import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type { Reward } from '../../interfaces'
import BackButton from '../../components/backButton'
import CardReward from '../../components/cardReward'
import ScreenLayout from '../../components/layout/screenLayout'
import WebApiAeco from '../../api/webApiAeco'
import useTranslate from '../../hooks/useTranslate'
import { SaveProccess } from '../../utils/savePackaging'

const Rewards = () => {
  const navigation = useNavigate()
  const { t } = useTranslate()
  const { type } = useParams<{ type: string }>()
  const [rewards, setRewards] = useState<Reward[]>([])

  const getRewardsByType = async (type: string) => {
    try {
      const response = await WebApiAeco.getRewardsByType(type)
      if (!response) {
        throw new Error('Not found')
      }
      setRewards(response)
    } catch (error) {
      throw new Error('Error getting subcategories')
    }
  }

  useEffect(() => {
    if (type) getRewardsByType(type)
  }, [type])

  const handleAction = async (reward: Reward) => {
    const saved = await SaveProccess({ type: reward.type, name: reward.name })
    if (saved) {
      navigation('/voucher')
    } else {
      navigation('/home')
    }
  }

  return (
    <ScreenLayout image="shrubbery.png" timerInitialTime={30}>
      <div className="flex flex-col justify-center items-center gap-11 h-screen select-none">
        <h1 className="text-8xl z-10 text-center uppercase max-w-[900px] font-bold tracking-wider mb-20">
          {t(`${type}.title`)}
        </h1>
        <div className="flex flex-col items-center bg-[#D9D9D9] bg-opacity-50 text-black shadow-md rounded-3xl w-[600px] h-[950px] z-10 p-5">
          <BackButton url="/reward_categories" />
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {rewards.map((reward, index) => (
              <CardReward
                key={index}
                imageSrc={reward.image && reward.image !== '' ? `/${reward.image.substring(reward.image.indexOf('synchronized'))}` : '/images/rewardCategory.png'}
                label={reward.name}
                url={''}
                action={() => handleAction(reward)}
              />
            ))}
          </div>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default Rewards
