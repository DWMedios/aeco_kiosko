
import { useNavigate } from 'react-router-dom';
import ScreenLayout from "../../components/layout/screenLayout";
import { useEffect } from 'react';
import QRCodeComponent from '../../components/qrCode';


const FinalView = () => {
  const QrCodeUrl = 'https://api.whatsapp.com/send?phone=+52 986 119 0181&text=Hola, Ayuntaeco | ¡Estoy interesado en el proyecto!';
  
  const navigation = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      console.log("Termino el tiempo");
      navigation("/home");
    }, 15000);
  });


  return (
    <ScreenLayout image="lastView.png">
      <div className="flex flex-col justify-center items-center text-center gap-11 h-[1255px] z-10">
        <h1 className='text-5xl font-normal z-10 mb-12 w-[400px]'>¿TE INTERESA EL PROYECTO?</h1>
        <div className='w-full z-10 flex justify-center'>
          <QRCodeComponent value={QrCodeUrl}/>
        </div>

        <span className='border-4 border-[#00804F] w-96 h-28 rounded-xl flex justify-center items-center font-bold text-4xl text-[#027333] z-10 bg-white'>ayuntaeco.com </span>

        <p className='text-2xl font-normal z-10 tracking-wider w-[200px]'>¡Gracias por tu colaboración!</p>
      </div>
    </ScreenLayout>
  );
};

export default FinalView;
