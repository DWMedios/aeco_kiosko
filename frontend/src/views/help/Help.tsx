import BackButton from "../../components/backButton/BackButton";
import ScreenLayout from "../../components/layout/screenLayout";
import QRCodeComponent from '../../components/qrCode';

function Help() {
  const QrCodeUrl = 'https://wa.me/9861190181?text=Hola%20Ayuntaeco%20|%20¡Necesito%20ayuda!';

  return (
    <ScreenLayout image="help_background.svg">
      <div className="text-center h-screen flex flex-col justify-center items-center select-none gap-11">
      <BackButton url="/home" imageSrc='images/backbutton.png'/>
        <h1 className="text-8xl mt-24  mb-10 max-w-[300px]">Soporte</h1>
        <p className="text-4xl max-w-[500px] mb-5">
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
        <p className="text-5xl font-bold max-w-[450px] mb-5 mt-8">
          +52 999 888 7777{" "}
        </p>
        <p className="text-4xl max-w-[400px]">¡Gracias por tu colaboración! </p>
      </div>
    </ScreenLayout>
  );
}

export default Help;
