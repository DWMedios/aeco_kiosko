import BackButton from "../../components/backButton/BackButton";
import Button from "../../components/button";
import ScreenLayout from "../../components/layout/screenLayout";
import { usePageData } from '../../hooks/usePageData';
import {  BackgroundButtonEnum, BorderColorEnum, BorderRadiusEnum, FontSizeEnum, MetaDataConditions, TextColorEnum} from "../../interfaces";
import ConditionsCard from './components/ConditionsCard';
import RewardsConditions from "./components/rewards";

const Conditions = () => {
  const exampleData: ArrayContainersConditions = {
    containers: [
      {
        container: {
          name: 'Bottle',
          icon: '/images/bottle.png',
        },
        conditions: ['Condition 1', 'Condition 2', 'Condition 3'],
      },
      {
        container: {
          name: 'Box',
          icon: '/images/can.png',
        },
        conditions: ['Condition A', 'Condition B', 'Condition C'],
      },
    ],
  }

  return (
    <ScreenLayout image="shrubbery.png">
      <div className="relative flex flex-col justify-center items-center h-screen select-none">
        <BackButton url="/home" />
        <div className="flex flex-col justify-center items-center">
          <span className="text-8xl">Recompensas</span>
          <span className="text-8xl">Disponibles</span>
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
        <Button 
          label={metas.button.label}
          url={metas.button.url}
          fontSize={FontSizeEnum[metas.button.fontSize as keyof typeof FontSizeEnum]} 
          bgColor={BackgroundButtonEnum[metas.button.bgColor as keyof typeof BackgroundButtonEnum]} 
          borderRadius={BorderRadiusEnum[metas.button.borderRadious as keyof typeof BorderRadiusEnum]} 
          textColor={TextColorEnum[metas.button.textColor as keyof typeof TextColorEnum]}
          borderColor={BorderColorEnum[metas.button.borderColor as keyof typeof BorderColorEnum]}
        />
      </div>
    </ScreenLayout>
  )
}

export default Conditions
