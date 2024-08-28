
import ScreenLayout from "../../components/layout/screenLayout";


const FinalView = () => {
  return (
    <ScreenLayout image="lastView.png">
      <div className="flex flex-col justify-center items-center text-center gap-11 h-[1280px]">
        <h1 className='text-5xl font-normal z-10 mb-12 w-[400px]'>¿TE INTERESA EL PROYECTO?</h1>
        <img src="/public/images/QRcode.png" alt="QR Code" className='h-[420px] z-10' />
        <button className='border-[#027333] border-solid border-4 p-4 rounded-lg text-[#027333] text-3xl font-bold w-[350px] z-10 cursor-pointer'>ayuntaeco.com</button>
        <p className='text-2xl font-normal z-10 tracking-wider w-[200px]'>¡Gracias por tu colaboración!</p>
      </div>
    </ScreenLayout>
  );
};

export default FinalView;
