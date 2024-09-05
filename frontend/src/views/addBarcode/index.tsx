import BackButton from '../../components/backButton/BackButton';
import ScreenLayout from "../../components/layout/screenLayout";
import QRCodeComponent from '../../components/qrCode';

const AddBarcode = () => {
  const QrCodeUrl = 'https://api.whatsapp.com/send?phone=+52 986 119 0181&text=Hola, Ayuntaeco | ¡Quiero registrar un Codigo de Barras!';
  
  return (
    <ScreenLayout image="leafBackground.png">
            <BackButton imageSrc='/images/backbutton.png' url="/example" />
      <div className="relative flex flex-col justify-center items-center h-[1000px]">

        <div className="flex flex-col justify-center items-center">
          <span className="text-4xl text-center w-80">
            AÑADIR CÓDIGO DE BARRAS
          </span>
        </div>
        <span className="text-2xl text-center w-96 mt-14 mb-10">
        Envianos a este whatsapp una foto del envase con la etiqueta y el código de barras VISIBLE
        </span>
        <div className='w-full z-10 flex justify-center'>
          <QRCodeComponent value={QrCodeUrl}/>
        </div>
        <img
          src="/images/WhatsappLogo.png"
          alt=""
          className="w-20 h-auto mt-10"
        />
        <span className="text-4xl font-bold text-center w-96 mt-8">
        +52 999 888 7777
        </span>
        <span className="text-2xl text-center w-96 mt-7">
        ¡Gracias por tu colaboración!
        </span>

      </div>
    </ScreenLayout>
  );
};

export default AddBarcode;
