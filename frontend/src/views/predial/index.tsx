import BackButton from "../../components/backButton/BackButton";
import ScreenLayout from "../../components/layout/screenLayout";
import PredialList from "./components/predialList";

const PredialPoints = () => {
  return (
    <ScreenLayout image="RewardsBackground.svg">
      <BackButton url="/home" />
      <div className="flex flex-col justify-center items-center gap-11">
        <h1 className="text-7xl text-center max-w-[500px] font-bold tracking-wide">
          BUSCA TU PREDIO
        </h1>
        <PredialList />
      </div>
    </ScreenLayout>
  );
};

export default PredialPoints;
