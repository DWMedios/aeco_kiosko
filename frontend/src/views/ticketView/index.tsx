
import { useNavigate } from 'react-router-dom';
import ScreenLayout from "../../components/layout/screenLayout";
import Ticket from './components/ticket';
import { useEffect } from 'react';
import { BackgroundButtonEnum, FontSizeEnum, TextColorEnum } from '../../interfaces';
import Button from '../../components/button';


const TicketView = () => {
  const navigation = useNavigate();


  useEffect(() => {
    setTimeout(() => {
      console.log("Termino el tiempo");
      navigation("/final_view");
    }, 10000);
  });

  return (
    <ScreenLayout image="TicketBackgound.png">
      <div className="flex flex-col justify-center items-center gap-11 z-10 h-screen select-none">
        <span className='text-4xl w-1/2 text-center'>Escanea el Código QR para descargar tu Ticket</span>
        <Ticket />
        <Button 
        label='FINALIZAR' 
        url="/final_view" 
        bgColor={BackgroundButtonEnum.green}
        borderColor={null}
        textColor={TextColorEnum.white}
        fontSize={FontSizeEnum.xl6}
        />
      </div>
    </ScreenLayout>
  );
};

export default TicketView;
