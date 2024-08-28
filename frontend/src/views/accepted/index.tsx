import ScreenLayout from "../../components/layout/screenLayout";
import Button from "../../components/button";

const Accepted = () => {
  return (
    <ScreenLayout image="backgroundAccepted.png">
      <div className="relative flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <span className="font-extrabold text-8xl text-center">
            ENVASE ACEPTADO
          </span>
        </div>
        <img
          src="/images/bottleAccepted.png"
          alt=""
          className="m-10 mb-20 w-auto h-52"
        />

        <Button label='INGRESAR OTRO ENVASE' url="/insert" />
        <Button label='FINALIZAR' url="/rewards" />
      </div>
    </ScreenLayout>
  );
};

export default Accepted;