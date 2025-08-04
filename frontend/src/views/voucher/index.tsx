import { useNavigate } from 'react-router-dom'
import WebApiAeco from '../../api/webApiAeco'
import ScreenLayout from '../../components/layout/screenLayout'
import TicketButton from '../../components/ticketButton'
import useTranslate from '../../hooks/useTranslate'
import { getLocalStorage } from '../../utils/manageStorage'

const VoucherView = () => {
  const { t } = useTranslate()
  const paper = getLocalStorage('paperStatus') === 'true'
  const navigate = useNavigate()

  const printerTicket = async () => {
    try {
      const ticketId = getLocalStorage('ticketId')
      if (ticketId) {
        await WebApiAeco.printerTicket(Number(ticketId))
        navigate('/final_view')
      }
    } catch (error) {
      console.log('~ printerTicket ~ error:', error)
      navigate('/ticket')
    }
  }

  return (
    <ScreenLayout image="leafBackground.png" timerInitialTime={30}>
      <div className="flex flex-col justify-center items-center text-center z-10 h-screen select-none gap-20">
        <h1 className="text-8xl uppercase font-bold z-10 w-[700px]">
          {t('voucher.title')}
        </h1>
        <div className="flex gap-8 mt-10 z-10 h-[350px]">
          <TicketButton
            url="/ticket"
            imageSrc="images/WhatsappLogo.png"
            altText="Digital"
            buttonText="Digital"
          />
          {paper && (
            <TicketButton
              action={() => printerTicket()}
              imageSrc="images/printer.png"
              altText="Impreso"
              buttonText="Impreso"
            />
          )}
        </div>
        <p className="text-6xl font-normal uppercase w-[600px]">
          {t('voucher.description')}
        </p>
      </div>
    </ScreenLayout>
  )
}

export default VoucherView
