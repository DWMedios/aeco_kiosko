import { QRCodeCanvas } from 'qrcode.react'
import { QRCodeInterface } from '../../interfaces'

const QRCodeComponent = ({
  value,
  size = 425,
  level = 'M',
  includeMargin = true,
  marginSize = 1,
  fgColor = '#000000',
  title = 'QR Code Ayuntaeco',
  bgColor = '#FFF',
}: QRCodeInterface) => {
  return (
    <QRCodeCanvas
      value={value}
      size={size}
      level={level}
      includeMargin={includeMargin}
      marginSize={marginSize}
      fgColor={fgColor}
      title={title}
      bgColor={bgColor}
    />
  )
}

export default QRCodeComponent
