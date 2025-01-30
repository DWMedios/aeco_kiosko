import { useParams } from 'react-router-dom'
import BackButton from '../../components/backButton'
import CardReward from '../../components/cardReward'
import ScreenLayout from '../../components/layout/screenLayout'
import { useEffect, useState } from 'react'
import WebApiAeco from '../../api/webApiAeco'
import { Rewards } from '../../interfaces'
import useTranslate from '../../hooks/useTranslate'
import i18n from '../../i18n'

const Services = () => {
  const { t } = useTranslate();
  console.log('Idioma actual:', i18n.language);
  
  const { id } = useParams<{ id: string }>()
  const [services, setServices] = useState<Rewards[]>([])

  const getServices = async (id: number) => {
    try {
      const response = await WebApiAeco.getRewardSubCaterory(id)
      if (!response) {
        throw new Error('Not found')
      }
      setServices(response)
    } catch (error) {
      console.log('Error when obtaining reward categories:', error)
    }
  }

  useEffect(() => {
    console.log('🚀 ~ useEffect ~ id:', id)
    if (id) getServices(id)
  }, [id])

  return (
    <ScreenLayout image="shrubbery.png" timerInitialTime={30}>
      <div className="flex flex-col justify-center items-center gap-11 h-screen select-none">
        <h1 className="text-8xl z-10 text-center uppercase max-w-[900px] font-bold tracking-wider mb-20">
          {t('services.title')}
        </h1>
        <div className="flex flex-col items-center bg-[#D9D9D9] bg-opacity-50 text-black shadow-md rounded-3xl w-[600px] h-[950px] z-10 p-5">
          <BackButton url="/example" />
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {services.map((reward, index) => (
              <CardReward
                key={index}
                imageSrc={'/images/QRcode.png'}
                label={reward.name}
                url={''}
              />
            ))}
          </div>
        </div>
      </div>

    </ScreenLayout>
    )
}

export default Services
