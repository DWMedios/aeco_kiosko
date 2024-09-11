
import { useNavigate } from 'react-router-dom';
import ScreenLayout from "../../components/layout/screenLayout";
import Ticket from './components/ticket';
import { useEffect } from 'react';


const TicketView = () => {
  const navigation = useNavigate();


  useEffect(() => {
    setTimeout(() => {
      console.log("Termino el timepo");
      navigation("/final_view");
    }, 10000);
  });

  return (
    <ScreenLayout image="TicketBackgound.png">
      <div className="flex flex-col justify-center items-center gap-11 z-10 h-screen select-none">
            <Ticket />
      </div>
    </ScreenLayout>
  );
};

export default TicketView;
