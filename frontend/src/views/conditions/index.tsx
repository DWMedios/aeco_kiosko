import BackButton from "../../components/backButton/BackButton";
import Button from "../../components/button";
import ScreenLayout from "../../components/layout/screenLayout";
import RewardsConditions from "./components/rewards";

const Conditions = () => {
  return (
    <ScreenLayout image="shrubbery.png">
      <BackButton url="/home" />
      <div className="relative flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <span className="text-6xl">Recompensas</span>
          <span className="text-6xl">Disponibles</span>
        </div>
        <div className="w-full mt-10">
          <RewardsConditions />
        </div>
        <div className="my-10 text-center ">
          <span className="text-5xl ">
            Tus envases deben estar en las siguientes condiciones:
          </span>
        </div>
        <div className="flex flex-row gap-4  w-full text-2xl mb-16">
          <div className="w-1/2 flex flex-row justify-center ">
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li className="">Sin aplastar</li>
              <li className="">Con etiqueta</li>
              <li className="">Sin residuos</li>
            </ul>
            <img src="/images/bottle.png" alt="" className="w-20 mx-2" />
          </div>
          <div className="w-1/2 flex flex-row justify-center ">
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li className="">Elemento 1</li>
              <li className="">Elemento 2</li>
              <li className="">Elemento 3</li>
            </ul>
            <img src="/images/can.png" alt="" className="w-20 mx-2" />
          </div>
        </div>
        <Button label="¡entendido!" borderRadius="3xl" url="/example" />
      </div>
    </ScreenLayout>
  );
};

export default Conditions;
