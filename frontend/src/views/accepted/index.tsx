import ScreenLayout from "../../components/layout/screenLayout";
import Button from "../../components/button";
import { BackgroundButtonEnum, TextColorEnum } from '../../interfaces';

const Accepted = () => {
  return (
    <ScreenLayout image="backgroundAccepted.png">
      <div className="relative flex flex-col justify-center items-center h-[1255px]">
        <div className="flex flex-col justify-center items-center">
          <span className="font-extrabold text-8xl text-center">
            ENVASE ACEPTADO
          </span>
        </div>
        <div className='flex flex-col justify-center items-center h-[550px]'>
          <img
            src="/images/bottleAccepted.png"
            alt=""
            className="m-10 mb-20 w-auto h-72"
          />
          <div className='flex flex-col bg-green-500 items-center w-72 rounded-3xl bg-opacity-60 text-white font-medium absolute p-1 tracking-wider'>
            <span className='text-3xl'>Coca Cola</span>
            <span className='text-3xl'>600ml</span>
          </div>
        </div>
        <Button 
        label='INGRESAR OTRO ENVASE' 
        url="/insert" 
        bgColor={BackgroundButtonEnum.green}
        borderColor={null}
        textColor={TextColorEnum.white}
        />
        <Button 
        label='FINALIZAR' 
        url="/rewards" 
        borderColor="border-4 border-[#FE5A8F]"
        textColor={TextColorEnum.pink}
        />
      </div>
    </ScreenLayout>
  );
};

export default Accepted;