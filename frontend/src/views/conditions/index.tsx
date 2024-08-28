import BackButton from "../../components/backButton/BackButton";
import Button from "../../components/button";
import ScreenLayout from "../../components/layout/screenLayout";
import { ArrayContainersConditions } from "../../interfaces";
import ContainerConditions from "./components/conditionsContainers";
import RewardsConditions from "./components/rewards";

const Conditions = () => {
  const exampleData: ArrayContainersConditions = {
    containers: [
      {
        container: {
          name: "Bottle",
          icon: "/images/bottle.png",
        },
        conditions: ["Condition 1", "Condition 2", "Condition 3"],
      },
      {
        container: {
          name: "Box",
          icon: "/images/can.png",
        },
        conditions: ["Condition A", "Condition B", "Condition C"],
      },
    ],
  };

  return (
    <ScreenLayout image="shrubbery.png">
      <BackButton url="/home" />
      <div className="relative flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <span className="text-6xl">Recompensas</span>
          <span className="text-6xl">Disponibles</span>
        </div>
        <div className="w-full mt-20 mb-20">
          <RewardsConditions />
        </div>
        <div className="my-10 text-center mb-20">
          <span className="text-5xl ">
            Tus envases deben estar en las siguientes condiciones:
          </span>
        </div>
        <div className="flex flex-row gap-4  w-full text-2xl mb-20">
          <ContainerConditions containers={exampleData.containers} />
        </div>
        <Button label="¡entendido!" borderRadius="3xl" url="/example" />
      </div>
    </ScreenLayout>
  );
};

export default Conditions;
