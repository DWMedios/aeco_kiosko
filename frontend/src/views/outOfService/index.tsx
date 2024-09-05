
import ScreenLayout from "../../components/layout/screenLayout";


const OutOfService = () => {
  return (
    <ScreenLayout image="shrubbery.png">
      <div className="flex flex-col justify-center items-center gap-11 z-10 h-[1255px]">
        <h1 className='text-7xl font-bold text-center w-96 leading-snug tracking-wide'>MÁQUINA FUERA DE SERVICIO</h1>
        <img src="images/FueraServicio.png" className='w-96 h-auto mt-10' alt="Fuera de Servicio"  />
      </div>
    </ScreenLayout>
  );
};

export default OutOfService;
