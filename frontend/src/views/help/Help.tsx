import BackButton from '../../components/backButton/BackButton'
import ScreenLayout from '../../components/layout/screenLayout'
import QRCodeComponent from '../../components/qrCode'
import { usePageData } from '../../hooks/usePageData'
import { MetaDataHelp } from '../../interfaces'

function Help() {
  const QrCodeUrl =
    'https://wa.me/9861190181?text=Hola%20Ayuntaeco%20|%20¡Necesito%20ayuda!'

  const { data: metas } = usePageData<MetaDataHelp>('Help')

  if (!metas) return <div>No metadata available</div>

  return (
    <ScreenLayout image={metas.background}>
      <div className="text-center h-screen flex flex-col justify-center items-center select-none gap-11">
        <BackButton url="/home" />
        <h1 className="text-8xl mt-24  mb-10 max-w-[300px]">
          {metas.textCenter.title}
        </h1>
        <p className="text-4xl max-w-[500px] mb-5">
          {metas.textCenter.description} <br />
          <br /> {metas.textCenter.phoneText}
        </p>
        <div className="w-full z-10 flex justify-center">
          <QRCodeComponent value={QrCodeUrl} />
        </div>
        <img
          className="w-20 mt-4"
          src="/images/WhatsappLogo.png"
          alt="QR Code"
        />
        <p className="text-5xl font-bold max-w-[450px] mb-5 mt-8">
          {metas.textDown.phone}
        </p>
        <p className="text-4xl max-w-[400px]">{metas.textDown.description}</p>
      </div>
    </ScreenLayout>
  )
}

export default Help
