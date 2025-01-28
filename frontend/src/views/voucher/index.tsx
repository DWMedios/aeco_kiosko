import i18n from '../../i18n'
import ScreenLayout from '../../components/layout/screenLayout'
import TicketButton from '../../components/ticketButton'
import useTranslate from '../../hooks/useTranslate'


const VoucherView = () => {

  const { t } = useTranslate();
  console.log('Idioma actual:', i18n.language);

  return (
    <ScreenLayout
      image="leafBackground.png"
      showTimer={true}
      timerInitialTime={30}
    >
      
      <div className="flex flex-col justify-center items-center text-center z-10 h-screen select-none gap-20">
        <h1 className="text-8xl font-bold z-10 w-[700px]">
          {t('choseeYourProof')} 
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
          {t('forAMoreSustaintableTomorrow')} 
        </p>
      </div>
    </ScreenLayout>
  )
}

export default VoucherView
