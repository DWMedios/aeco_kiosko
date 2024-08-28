
import ScreenLayout from "../../components/layout/screenLayout";
import Ticket from './components/ticket';


const TicketView = () => {
  return (
    <ScreenLayout image="TicketBackgound.png">
      <div className="flex flex-col justify-center items-center gap-11 z-10 h-[1280px]">
            <Ticket />
      </div>
    </ScreenLayout>
  );
};

export default TicketView;
