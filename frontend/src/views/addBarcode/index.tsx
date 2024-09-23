import BackButton from '../../components/backButton/BackButton';
import ScreenLayout from "../../components/layout/screenLayout";
import QRCodeComponent from '../../components/qrCode';

const AddBarcode = () => {
  const QrCodeUrl = 'https://wa.me/9861190181?text=Hola%20Ayuntaeco%20|%20¡Quiero%20registrar%20un%20Código%20de%20Barras!';

  
  return (
    <ScreenLayout image="leafBackground.png">
      <div className="relative flex flex-col justify-center items-center h-screen select-none gap-12">
        <BackButton url="/example" />
        <div className="flex flex-col justify-center items-center">
          <span className="text-8xl text-center w-[800px] tracking-wider font-bold">
            AÑADIR CÓDIGO DE BARRAS
          </span>
        </div>
        <span className="text-4xl text-center w-[600px]">
        Envianos a este whatsapp una foto del envase con la etiqueta y el código de barras VISIBLE
        </span>
        <div className='w-full z-10 flex justify-center'>
          <QRCodeComponent value={QrCodeUrl}/>
        </div>
        <img
          src="/images/WhatsappLogo.png"
          alt=""
          className="w-20 h-auto"
        />
        <span className="text-6xl font-bold text-center">
        +52 999 888 7777
        </span>
        <span className="text-4xl text-center w-96">
        ¡Gracias por tu colaboración!
        </span>
      </div>
    </ScreenLayout>
  );
};

export default AddBarcode;
