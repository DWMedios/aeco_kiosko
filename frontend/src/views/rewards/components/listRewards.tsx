import type { RewardCategoriesProps } from '../../../interfaces'
import CardReward from '../../../components/cardReward'

const ListRewards = ({ categories }: RewardCategoriesProps) => {
  return (
    <div className="flex flex-col items-center bg-[#D9D9D9] bg-opacity-50 text-black shadow-md rounded-3xl w-[600px] h-[950px] z-10 p-5">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {categories.map((reward, index) => (
          <CardReward
            key={index}
            imageSrc={'/images/QRcode.png'}
            label={reward?.name}
            url={
              index == 0 ? `/donative/${reward.id}` : `/services/${reward.id}`
            }
          />
        ))}
      </div>
    </div>
  )
}

export default ListRewards
