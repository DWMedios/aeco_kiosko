import Button from "../../components/button";
import ScreenLayout from "../../components/layout/screenLayout";

const Example = () => {
  return (
    <ScreenLayout image="leafBackground.png">
      <div className="relative flex flex-col justify-center items-center h-[1255px]">
        <div className="flex flex-col justify-center items-center w-[450px]">
          <span className="text-5xl text-center">
            Inserta tu envase con el código de barras hacia arriba
          </span>
        </div>
        <img src="/images/example.png" alt="" className="m-10 w-60 h-[500px]" />

        <Button 
        label="¡estoy listo!" 
        url="/insert" />
      </div>
    </ScreenLayout>
  );
};

export default Example;
