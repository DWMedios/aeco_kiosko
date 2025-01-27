import CardReward from '../../../components/cardReward';
import { PropsRewards } from '../../../interfaces';


const ListRewards = ( {rewards}: PropsRewards) => {
  console.log("🚀 ~ ListRewards ~ rewards:", rewards )
  return (
    <div className="flex flex-col items-center bg-[#D9D9D9] bg-opacity-50 text-black shadow-md rounded-3xl w-[600px] h-[950px] z-10 p-5">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {rewards.map((reward, index) => (
          <CardReward
            key={index} 
            imageSrc={"/images/QRcode.png"}
            label={reward?.name}
            url={index == 0 ? "/discounts" : "/services"}
          />
        ))}
      </div>
    </div>
  );
};

export default ListRewards;
