import { usePageData } from '../../hooks/usePageData'

import { MetaDataHelp } from '../../interfaces'

import BackButton from '../../components/backButton'
import QRCodeComponent from '../../components/qrCode'
import ScreenLayout from '../../components/layout/screenLayout'
import useTranslate from '../../hooks/useTranslate'
import i18n from '../../i18n'

function Help() {

  const { t } = useTranslate();
  console.log('Idioma actual', i18n.language);

  const QrCodeUrl =
    'https://wa.me/9861190181?text=Hola%20Ayuntaeco%20|%20¡Necesito%20ayuda!'

  const { data: metas, loading, error } = usePageData<MetaDataHelp>('Help')

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

  return (
    <ScreenLayout image={metas.imgBg}>
      <div className="text-center h-screen flex flex-col justify-center items-center select-none gap-11">
        <BackButton url="/home" />
        <h1 className="text-8xl mt-24 normal-case mb-10 max-w-[300px]">
          {metas?.textCenter?.title || t('help.title')}
        </h1>
        <p className="text-4xl normal-case max-w-[500px] mb-5">
          {metas?.textCenter?.description || t('help.description')} <br />
          <br /> {metas?.textCenter?.phoneText || t('help.phoneText')}
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
          {metas?.textDown?.phone || '+52 999 888 7777'}
        </p>
        <p className="text-4xl normal-case max-w-[400px]">
          {metas?.textDown?.description || t('help.textDown')}
        </p>
      </div>
    </ScreenLayout>
  )
}

export default Help
