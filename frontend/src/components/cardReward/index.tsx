import { useNavigate } from "react-router-dom";
import { CardRewardinterface } from '../../interfaces';


const CardReward = ({
  label = "",
  url,
  imageSrc,
}: CardRewardinterface) => {
  const navigation = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center items-center text-black w-[250px] h-[250px] cursor-pointer">
        <button
          onClick={() => navigation(url)}
          className={`w-[200px] h-[200px] z-10`}
        >
            {imageSrc && <img src={imageSrc} alt="back-button" className="w-full h-full object-contain" />}
            {label}
        </button>
      </div>
    </>
  );
};

export default CardReward;
