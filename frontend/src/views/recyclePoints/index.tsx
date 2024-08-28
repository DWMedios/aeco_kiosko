import BackButton from "../../components/backButton/BackButton";
import ScreenLayout from "../../components/layout/screenLayout";
import RecyclePointsList from "./components/recyclePointsList";

const RecyclePoints = () => {
  return (
    <ScreenLayout image="RewardsBackground.svg">
      <BackButton url="/home" />
      <div className="flex flex-col justify-center items-center gap-11">
        <h1 className="text-7xl text-center max-w-[500px] font-bold tracking-wide z-10">
          INTRODUCE TU NÚMERO
        </h1>
        <RecyclePointsList />
      </div>
    </ScreenLayout>
  );
};

export default RecyclePoints;
