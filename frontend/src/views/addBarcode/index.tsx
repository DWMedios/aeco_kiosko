import { MetaDataAddBarcode } from '../../interfaces'
import { usePageData } from '../../hooks/usePageData'
import BackButton from '../../components/backButton'
import QRCodeComponent from '../../components/qrCode'
import ScreenLayout from '../../components/layout/screenLayout'
import useTranslate from '../../hooks/useTranslate'

const AddBarcode = () => {

  const { t } = useTranslate();

  const {
    data: metas,
    loading,
    error,
  } = usePageData<MetaDataAddBarcode>('AddBarcode')

  if (loading || error || !metas) {
    return (
      <div>
        {loading
          ? 'Loading...'
          : error
            ? `Error: ${error}`
            : 'No metadata available'}
      </div>
    )
  }

  const QrCodeUrl =
    'https://wa.me/9861190181?text=Hola%20Ayuntaeco%20|%20¡Quiero%20registrar%20un%20Código%20de%20Barras!'

  return (
    <ScreenLayout image={metas.imgBg}>
      <div className="relative flex flex-col justify-center items-center h-screen select-none gap-12">
        <BackButton url="/example" />
        <div className="flex flex-col justify-center items-center">
          <span className="text-8xl text-center uppercase w-[800px] tracking-wider font-bold">
            {metas?.textCenter?.title || t('addBarcode.title')}
          </span>
        </div>
        <span className="text-4xl text-center w-[600px]">
          {metas?.textCenter?.description || t('addBarcode.description')}
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
          {metas?.textDown?.phone || '+52 999 888 7777'}
        </span>
        <span className="text-4xl text-center normal-case w-96">
          {metas?.textDown?.description || t('help.textDown')}
        </span>
      </div>
    </ScreenLayout>
  )
}

export default AddBarcode
