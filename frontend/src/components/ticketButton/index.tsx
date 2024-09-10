import { useNavigate } from 'react-router-dom';
import { TicketButtonInterface } from '../../interfaces';


const TicketButton = ({
    imageSrc,
    altText,
    buttonText,
    buttonClass = 'flex flex-col items-center justify-between bg-white p-4 h-[250px] z-10',
    imgClass = 'w-[150px] h-[150px] border-4 border-[#027333] border-solid p-3 rounded-lg',
    textClass = 'text-4xl font-medium',
    url,
  }: TicketButtonInterface) => {
    const navigation = useNavigate();

    return (
      <button 
        onClick={() => navigation(url)}
        className={buttonClass}>
        <img src={imageSrc} alt={altText} className={imgClass} />
        <span className={textClass}>{buttonText}</span>
      </button>
    );
  };
  
  export default TicketButton;