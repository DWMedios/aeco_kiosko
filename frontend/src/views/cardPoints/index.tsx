import BackButton from "../../components/backButton/BackButton";
import ScreenLayout from "../../components/layout/screenLayout";
import ListCardPoints from "./components/listCardPoints";

const CardPoints = () => {
  return (
    <ScreenLayout image="RewardsBackground.svg">
      <BackButton url="/rewards" imageSrc='/public/images/backbutton.png'/>
      <div className="flex flex-col justify-center items-center gap-11">
        <h1 className="text-7xl z-10 text-center max-w-[600px] font-bold tracking-wide">
          ACUMULA PUNTOS
        </h1>
        <ListCardPoints />
      </div>
    </ScreenLayout>
  );
};

export default CardPoints;
