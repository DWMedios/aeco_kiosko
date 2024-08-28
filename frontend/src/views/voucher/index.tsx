import ScreenLayout from "../../components/layout/screenLayout";

const VoucherView = () => {
  return (
    <ScreenLayout image="leafBackground.png">
      <div className="flex flex-col justify-center items-center text-center gap-11 z-10 h-[1280px]">
        <h1 className='text-7xl font-bold'>ELIGE TU COMPROBANTE</h1>
        <div className="flex gap-8 mt-10 z-10 h-[350px]">
          <button className="flex flex-col items-center justify-between bg-whiterounded-lg p-4 h-[250px]">
            <img src="/public/images/WhatsappLogo.png" alt="Digital" className="w-[150px] h-[150px] mb-2 border-4 border-[#027333] border-solid p-3 rounded-lg" />
            <span className="text-xl font-medium">Digital</span>
          </button>
          <button className="flex flex-col items-center justify-between bg-white rounded-lg p-4 h-[250px]">
            <img src="/public/images/printer.png" alt="Impreso" className="w-[150px] h-[150px] mb-2 border-4 border-[#027333] border-solid p-3 rounded-lg" />
            <span className="text-xl font-medium">Impreso</span>
          </button>
        </div>
        <p className='text-4xl font-normal w-96'>POR UN MAÑANA MÁS SUSTENTABLE</p>
      </div>
    </ScreenLayout>
  );
};

export default VoucherView;
