import BackButton from "../../components/backButton/BackButton";
import ScreenLayout from "../../components/layout/screenLayout";
import RewardsConditions from "./components/rewards";

const Conditions = () => {
  return (
    <ScreenLayout image="/images/shrubbery.png">
      <BackButton url="/home" />
      <div className="relative flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <span className="text-6xl">Recompensas</span>
          <span className="text-6xl">Disponibles</span>
        </div>
        <div className="w-full mt-10">
          <RewardsConditions />
        </div>
        <div className="mt-10">
          <span className="text-6xl">
            Tus envases deben estar en las siguientes condiciones:
          </span>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default Conditions;
