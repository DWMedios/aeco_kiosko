import { useParams } from 'react-router-dom'
import BackButton from '../../components/backButton'
import CardReward from '../../components/cardReward'
import ScreenLayout from '../../components/layout/screenLayout'
import { useEffect, useState } from 'react'
import WebApiAeco from '../../api/webApiAeco'
import { Rewards } from '../../interfaces'

const Services = () => {
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
        <BackButton url="/example" />
        <h1 className="text-8xl z-10 text-center max-w-[900px] font-bold tracking-wider mb-20">
          ELIGE TU SERVICIO
        </h1>
        {services.map((reward, index) => (
          <CardReward
            key={index}
            imageSrc={'/images/QRcode.png'}
            label={reward.name}
            url={''}
          />
        ))}
      </div>
    </ScreenLayout>
  )
}

export default Services
