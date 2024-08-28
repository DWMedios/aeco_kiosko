import CardReward from '../../../components/cardReward';

const ListRewards = () => {
    const RewardsList = [
        { imageSrc: '../../../../public/images/QRcode.png', label: 'Descuentos', url: '/discounts' },
        { imageSrc: '../../../../public/images/QRcode.png', label: 'Tarjeta', url: '/card_points' },
        { imageSrc: '../../../../public/images/QRcode.png', label: 'Donativo', url: '/donative' },

    ];

    return (
        <div className="flex flex-row flex-wrap p-5 justify-center bg-[#D9D9D9] bg-opacity-50 text-black shadow-md rounded-3xl w-[600px] h-[850px] z-10">
            {RewardsList.map((Reward, index) => (
                <CardReward 
                    key={index}
                    imageSrc={Reward.imageSrc} 
                    label={Reward.label} 
                    url={Reward.url} 
                />
            ))}
        </div>
    );
};

export default ListRewards;
