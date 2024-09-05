import ScreenLayout from "../../components/layout/screenLayout";
import TicketButton from '../../components/ticketButton';


const VoucherView = () => {


  return (
    <ScreenLayout image="leafBackground.png">
      <div className="flex flex-col justify-center items-center text-center gap-11 z-10 h-[1255px]">
        <h1 className='text-7xl font-bold'>ELIGE TU COMPROBANTE</h1>
        <div className="flex gap-8 mt-10 z-10 h-[350px]">
          <TicketButton
            url="/ticket"
            imageSrc="images/WhatsappLogo.png"
            altText="Digital"
            buttonText="Digital"
          />
          <TicketButton
            url="/ticket"
            imageSrc="images/printer.png"
            altText="Impreso"
            buttonText="Impreso"
          />
        </div>
        <p className='text-4xl font-normal w-96'>POR UN MAÑANA MÁS SUSTENTABLE</p>
      </div>
    </ScreenLayout>
  );
};

export default VoucherView;
