import { useState, useEffect } from 'react';
import Reward from './reward';
import RecyclePointsList from './recyclePointsList';



interface RewardData {
  id: string;
  title: string;
  imageUrl: string;
  relatedDiscounts: RewardData[];
}

const ListRewards = () => {
  const [rewards, setRewards] = useState<RewardData[]>([]);
  const [selectedReward, setSelectedReward] = useState<RewardData | null>(null);

  const titleMapping: { [key: string]: string } = {
    'Predial': 'BUSCA TU PREDIO',
    'Descuentos': 'SELECCIONA TU DESCUENTO',
    'Tarjeta': 'ACUMULA PUNTOS',
    'Donativo': 'SELECCIONA TU DONATIVO',
    'aecopuntos': 'INTRODUCE TU NÚMERO',
  };

  useEffect(() => {
    // Simulación de datos obtenidos de la base de datos
    const rewardsFromDB: RewardData[] = [
      {
        id: '1',
        title: 'Predial',
        imageUrl: '/images/loading.png',
        relatedDiscounts: [
          { id: '1-1', title: 'Subdescuento 1-1', imageUrl: '/images/QRcode.png', relatedDiscounts: [] },
          { id: '1-2', title: 'Subdescuento 1-2', imageUrl: '/images/QRcode.png', relatedDiscounts: [] },
          { id: '1-3', title: 'Subdescuento 1-2', imageUrl: '/images/QRcode.png', relatedDiscounts: [] },
          { id: '1-4', title: 'Subdescuento 1-2', imageUrl: '/images/QRcode.png', relatedDiscounts: [] },
          { id: '1-5', title: 'Subdescuento 1-2', imageUrl: '/images/QRcode.png', relatedDiscounts: [] },
        ],
      },
      {
        id: '2',
        title: 'Descuentos',
        imageUrl: '/images/loading.png',
        relatedDiscounts: [
          { id: '2-1', title: 'Subdescuento 2-1', imageUrl: '/images/QRcode.png', relatedDiscounts: [] },
          { id: '2-2', title: 'Subdescuento 2-2', imageUrl: '/images/QRcode.png', relatedDiscounts: [] },
        ],
      },
      {
        id: '3',
        title: 'Tarjeta',
        imageUrl: '/images/loading.png',
        relatedDiscounts: [
          { id: '3-1', title: 'Subdescuento 3-1', imageUrl: '/images/QRcode.png', relatedDiscounts: [] },
          { id: '3-2', title: 'Subdescuento 3-2', imageUrl: '/images/QRcode.png', relatedDiscounts: [] },
        ],
      },
      {
        id: '4',
        title: 'Donativo',
        imageUrl: '/images/loading.png',
        relatedDiscounts: [
          { id: '4-1', title: 'Subdescuento 4-1', imageUrl: '/images/QRcode.png', relatedDiscounts: [] },
          { id: '4-2', title: 'Subdescuento 4-2', imageUrl: '/images/QRcode.png', relatedDiscounts: [] },
        ],
      },
      {
        id: '5',
        title: 'aecopuntos',
        imageUrl: '/images/loading.png',
        relatedDiscounts: [],
      },
    ];
    setRewards(rewardsFromDB);
  }, []);

  const handleRewardClick = (reward: RewardData) => {
    setSelectedReward(reward);
  };

  const renderContent = () => {
    if (selectedReward) {
      if (selectedReward.title === 'aecopuntos') {
        return <RecyclePointsList />;
      }
      return (
        <div className="flex flex-row flex-wrap p-5 items-center justify-center gap-4 bg-[#D9D9D9] bg-opacity-50 text-black shadow-md rounded-3xl w-[600px] h-[850px] z-10">
          {selectedReward.relatedDiscounts.slice(0, 5).map((reward) => (
            <Reward
              key={reward.id}
              title={reward.title}
              imageUrl={reward.imageUrl}
              onClick={() => handleRewardClick(reward)}
            />
          ))}
        </div>
      );
    }

    return (
      <div className="flex flex-row flex-wrap p-5 items-center justify-center gap-4 bg-[#D9D9D9] bg-opacity-50 text-black shadow-md rounded-3xl w-[600px] h-[850px] z-10">
        {rewards.slice(0, 5).map((reward) => (
          <Reward
            key={reward.id}
            title={reward.title}
            imageUrl={reward.imageUrl}
            onClick={() => handleRewardClick(reward)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl text-center max-w-[600px] font-bold tracking-wide mb-8">
        {selectedReward ? titleMapping[selectedReward.title] : 'ELIGE TU DESCUENTO'}
      </h1>
      {renderContent()}
    </div>
  );
};

export default ListRewards;
