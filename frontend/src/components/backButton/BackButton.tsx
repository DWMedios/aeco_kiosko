import { useNavigate } from "react-router-dom";
import { BackButtoninterface } from "../../interfaces";

const BackButton = ({
  bgColor = "bg-[#0a8748]",
  url,
  imageSrc
}: BackButtoninterface) => {
  const navigation = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center items-center w-40 pt-7">
        <button
          onClick={() => navigation(url)}
          className={`${bgColor} p-5 rounded-3xl w-[80px] h-[80px] z-10`}
        >
          {imageSrc && <img src={imageSrc} alt="back-button" className="w-full h-full object-contain" />}
        </button>
        <span className='tracking-wider font-medium z-10'>Regresar</span>
      </div>
    </>
  );
};

export default BackButton;
