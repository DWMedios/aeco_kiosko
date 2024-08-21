import BackButton from "../../components/backButton/BackButton";
import ScreenLayout from "../../components/layout/screenLayout";
import ListPoints from "./components/listPoints";

const Points = () => {
  return (
    <ScreenLayout image="RewardsBackground.svg">
      <BackButton url="/home" />
      <div className="flex flex-col justify-center items-center gap-11">
        <h1 className="text-7xl text-center max-w-[600px] font-bold tracking-wide">
          ACUMULA PUNTOS
        </h1>
        <ListPoints />
      </div>
    </ScreenLayout>
  );
};

export default Points;
