import CardReward from '../../../components/cardReward'

const ListRewards = () => {
  const RewardsList = [
    { imageSrc: 'images/QRcode.png', label: 'Descuentos', url: '/discounts' },
    { imageSrc: 'images/QRcode.png', label: 'Tarjeta', url: '/card_points' },
    { imageSrc: 'images/QRcode.png', label: 'Donativo', url: '/donative' },
  ]

  return (
    <div className="flex flex-col items-center bg-[#D9D9D9] bg-opacity-50 text-black shadow-md rounded-3xl w-[600px] h-[950px] z-10 p-5">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {RewardsList.map((Reward, index) => (
          <CardReward
            key={index}
            imageSrc={Reward.imageSrc}
            label={Reward.label}
            url={Reward.url}
          />
        ))}
      </div>
    </div>
  )
}

export default ListRewards
