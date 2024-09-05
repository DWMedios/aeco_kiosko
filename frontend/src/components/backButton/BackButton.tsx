import { useNavigate } from "react-router-dom";
import { BackButtoninterface } from "../../interfaces";

const BackButton = ({
  url,
  imageSrc
}: BackButtoninterface) => {
  const navigation = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center items-center w-40 pt-7 z-10">
        <button
          onClick={() => navigation(url)}
          className={`rounded-3xl w-[80px] h-[80px] z-10`}
        >
          {imageSrc && <img src={imageSrc} alt="back-button" className="w-full h-full object-contain z-10" />}
        </button>
        <span className='tracking-wider font-medium z-10'>Regresar</span>
      </div>
    </>
  );
};

export default BackButton;
