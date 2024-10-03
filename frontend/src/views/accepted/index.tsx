import ScreenLayout from "../../components/layout/screenLayout";
import Button from "../../components/button";
import { BackgroundButtonEnum, FontSizeEnum, TextColorEnum } from '../../interfaces';

const Accepted = () => {
  return (
    <ScreenLayout image="backgroundAccepted.png">
      <div className="flex flex-col justify-center items-center h-screen select-none gap-16">
        <div className="flex flex-col justify-center items-center">
          <span className="font-extrabold text-8xl text-center w-[800px] z-10 tracking-wider">
            ENVASE ACEPTADO
          </span>
        </div>
        <div className='flex flex-col justify-center items-center h-[600px]'>
          <img
            src="/images/bottleAccepted.png"
            alt=""
            className="m-10 mb-20 w-auto h-90"
          />
          <div className='flex flex-col bg-green-500 items-center w-96 rounded-3xl bg-opacity-70 text-white font-medium absolute p-2 tracking-wider'>
            <span className='text-5xl font-bold tracking-widest'>Coca Cola</span>
            <span className='text-5xl font-bold tracking-widest'>600ml</span>
          </div>
        </div>
        <Button 
        label='INGRESAR OTRO ENVASE' 
        url="/insert" 
        bgColor={BackgroundButtonEnum.green}
        borderColor={null}
        textColor={TextColorEnum.white}
        fontSize={FontSizeEnum.xl6}
        />
        <Button 
        label='FINALIZAR' 
        url="/rewards" 
        borderColor="border-4 border-[#FE5A8F]"
        textColor={TextColorEnum.pink}
        fontSize={FontSizeEnum.xl6}
        />
      </div>
    </ScreenLayout>
  );
};

export default Accepted;