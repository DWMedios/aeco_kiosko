import ScreenLayout from '../../components/layout/screenLayout'
import TicketButton from '../../components/ticketButton'

const VoucherView = () => {
  return (
    <ScreenLayout image="leafBackground.png">
      <div className="flex flex-col justify-center items-center text-center z-10 h-screen select-none gap-20">
        <h1 className="text-8xl font-bold z-10 w-[700px]">
          ELIGE TU COMPROBANTE
        </h1>
        <div className="flex gap-8 mt-10 z-10 h-[350px]">
          <TicketButton
            url="/ticket"
            imageSrc="images/WhatsappLogo.png"
            altText="Digital"
            buttonText="Digital"
          />
          <TicketButton
            url="/final_view"
            imageSrc="images/printer.png"
            altText="Impreso"
            buttonText="Impreso"
          />
        </div>
        <p className="text-6xl font-normal w-[600px]">
          POR UN MAÑANA MÁS SUSTENTABLE
        </p>
      </div>
    </ScreenLayout>
  )
}

export default VoucherView
