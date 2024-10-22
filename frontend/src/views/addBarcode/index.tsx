import BackButton from '../../components/backButton/BackButton'
import ScreenLayout from '../../components/layout/screenLayout'
import QRCodeComponent from '../../components/qrCode'
import { usePageData } from '../../hooks/usePageData'
import { MetaDataAddBarcode } from '../../interfaces'

const AddBarcode = () => {
  const {
    data: metas,
    loading,
    error,
  } = usePageData<MetaDataAddBarcode>('AddBarcode')

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!metas) return <div>No metadata available</div>

  const QrCodeUrl =
    'https://wa.me/9861190181?text=Hola%20Ayuntaeco%20|%20¡Quiero%20registrar%20un%20Código%20de%20Barras!'

  return (
    <ScreenLayout image={metas.background}>
      <div className="relative flex flex-col justify-center items-center h-screen select-none gap-12">
        <BackButton url="/example" />
        <div className="flex flex-col justify-center items-center">
          <span className="text-8xl text-center w-[800px] tracking-wider font-bold">
            {metas.textCenter.title}
          </span>
        </div>
        <span className="text-4xl text-center w-[600px]">
          {metas.textCenter.description}
        </span>
        <div className="w-full z-10 flex justify-center">
          <QRCodeComponent value={QrCodeUrl} />
        </div>
        <img
          src="/images/WhatsappLogo.png"
          alt="Whatsapp Logo"
          className="w-20 h-auto"
        />
        <span className="text-6xl font-bold text-center">
          {metas.textDown.phone}
        </span>
        <span className="text-4xl text-center w-96">
          {metas.textDown.description}
        </span>
      </div>
    </ScreenLayout>
  )
}

export default AddBarcode
