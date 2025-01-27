import BackButton from '../../components/backButton'
import ScreenLayout from '../../components/layout/screenLayout'
import ListDonatives from './components/listDonatives'
import WebApiAeco from '../../api/webApiAeco'
import { useEffect, useState } from 'react'
import type { Donatives } from '../../interfaces'
import { useParams } from 'react-router-dom'

const Donatives = () => {
  const { id } = useParams<{ id: string }>();
const [donatives, setDonative] = useState<Donatives[]>([]);
  
    const fetchDonatives = async () => {
      try {
        const response = await WebApiAeco.getRewardSubCaterory(id);
        if (!response) {
          throw new Error('Page not found');
        }
        console.log('🚀 ~ getDonatives ~ response:', response);
        setDonative(response);
      } catch (error) {
        console.log('Error when obtaining reward categories:', error);
      }
    };
  
    useEffect(() => {
      console.log('🚀 ~ useEffect ~ id:', id);
      fetchDonatives();
    }, [id]);


  return (
    <ScreenLayout image="shrubbery.png" timerInitialTime={30}>
      <div className="flex flex-col justify-center items-center gap-11 h-screen select-none">
        <BackButton url="/rewards" />
        <h1 className="text-8xl z-10 text-center max-w-[900px] font-bold tracking-wider mb-20">
          ELIGE TU DONATIVO
        </h1>
        <ListDonatives donatives={donatives} />
      </div>
    </ScreenLayout>
  )
}

export default Donatives
