import BackButton from "../../components/backButton/BackButton";
import ScreenLayout from "../../components/layout/screenLayout";
import QRCodeComponent from '../../components/qrCode';

function Help() {
  const QrCodeUrl = 'https://api.whatsapp.com/send?phone=+52 986 119 0181&text=Hola, Ayuntaeco | ¡Necesito ayuda!';

  return (
    <ScreenLayout image="help_background.svg">
      <BackButton url="/home" imageSrc='images/backbutton.png'/>
      <div className="text-center min-h-[1000px] flex flex-col justify-center items-center">
        <h1 className="text-5xl mt-24  mb-10 max-w-[300px]">Soporte</h1>
        <p className="text-2xl max-w-[300px] mb-5">
          Cualquier duda o aclaración estamos para escucharte. <br />
          <br /> Envianos un WhatsApp{" "}
        </p>
       <div className='w-full z-10 flex justify-center'>
        <QRCodeComponent value={QrCodeUrl}/>
       </div>
        <img
          className="w-20 mt-4"
          src="/images/WhatsappLogo.png"
          alt="QR Code"
        />
        <p className="text-4xl font-bold max-w-[350px] mb-5 mt-5">
          +52 999 888 7777{" "}
        </p>
        <p className="text-2xl max-w-[300px]">¡Gracias por tu colaboración! </p>
      </div>
    </ScreenLayout>
  );
}

export default Help;
