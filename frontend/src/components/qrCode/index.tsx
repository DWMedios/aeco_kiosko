import { QRCodeCanvas } from 'qrcode.react';
import { QRCodeInterface } from '../../interfaces';

const QRCodeComponent = ({ 
    value, 
    size = 425, 
    level = 'L', 
    includeMargin = true, 
    marginSize = 1 
  }: QRCodeInterface) => {
    return (
      <QRCodeCanvas 
        value={value} 
        size={size} 
        level={level} 
        includeMargin={includeMargin} 
        marginSize={marginSize} 
      />
    );
  }
  
  export default QRCodeComponent;