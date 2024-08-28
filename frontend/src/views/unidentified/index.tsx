import ScreenLayout from "../../components/layout/screenLayout";
import Button from "../../components/button";

const Unidentified = () => {
  return (
    <ScreenLayout image="leafBackground.png">
      <div className="relative flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <span className="font-extrabold text-8xl text-center">
            ENVASE NO IDENTIFICADO
          </span>
        </div>
        <img
          src="/images/unidentified.png"
          alt=""
          className="m-10 mb-20 w-auto h-96"
        />

        <Button label='¡INTENTAR DE NUEVO!' url="/insert" />
        <Button label='FINALIZAR' url="/rewards" />
      </div>
    </ScreenLayout>
  );
};

export default Unidentified;