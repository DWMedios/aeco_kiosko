import { TextColorEnum } from '../../interfaces'

import Button from '../../components/button'
import QRCodeComponent from '../../components/qrCode'
import ScreenLayout from '../../components/layout/screenLayout'
import useTranslate from '../../hooks/useTranslate'

const FinalView = () => {

  const { t } = useTranslate();

  const QrCodeUrl =
    ' https://wa.me/9861190181?text=Hola%20Ayuntaeco%20|%20¡Estoy%20interesado%20en%20el%20proyecto!'

  return (
    <ScreenLayout image="lastView.png" timerInitialTime={20}>
      <div className="flex flex-col justify-center items-center text-center gap-16 h-screen select-none z-10">
        <h1 className="text-7xl font-normal uppercase z-10 mb-12 w-[600px]">
          {t('finalView.title')}
        </h1>
        <div className="w-full z-10 flex justify-center">
          <QRCodeComponent value={QrCodeUrl} />
        </div>
        <span className="w-[600px] h-[150px] rounded-xl flex justify-center items-center font-bold text-6xl text-[#027333] z-10">
          ayuntaeco.com{' '}
        </span>
        <Button
          label="Descargar Ticket Digital"
          url="/ticket"
          bgColor={null}
          textColor={TextColorEnum.pink}
        />
        <p className="text-6xl font-normal normal-case z-10 tracking-wider w-[500px]">
          {t('help.textDown')}
        </p>
      </div>
    </ScreenLayout>
  )
}

export default FinalView
