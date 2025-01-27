import BackButton from '../../components/backButton'
import ListRewards from './components/listRewards'
import Modal from './components/modal'
import ScreenLayout from '../../components/layout/screenLayout'
import WebApiAeco from '../../api/webApiAeco'
import { useEffect, useState } from 'react'
import { RewardCategory } from '../../interfaces'


const Rewards = () => {
  const [rewards, setRewards] = useState<RewardCategory[]>([]);
  
  const fetchRewards = async () => {
    try {
      const response = await WebApiAeco.getRewardCaterories();
      if (!response){
        throw new Error('Page not found')
      }
      setRewards(response);
      console.log('🚀 ~ fetchRewards ~ response:', response);
    } catch (error) {
      console.log('Error al obtener las categorias de recompensas:', error);
    }
  };

  useEffect(() => {
    fetchRewards();
  }, []);


  return (
    <ScreenLayout image="shrubbery.png" timerInitialTime={30}>
      <div className="flex flex-col justify-center items-center gap-11 h-screen select-none">
        <BackButton url="/example" />
        <h1 className="text-8xl z-10 text-center max-w-[900px] font-bold tracking-wider mb-20">
          ELIGE TU RECOMPENSA
        </h1>
        <ListRewards rewards={rewards} />
      </div>
      <Modal />
    </ScreenLayout>
  )
}

export default Rewards
