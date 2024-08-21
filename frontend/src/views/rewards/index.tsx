import BackButton from "../../components/backButton/BackButton";
import ScreenLayout from "../../components/layout/screenLayout";
import ListRewards from "./components/listRewards";

const Rewards = () => {
  return (
    <ScreenLayout image="/images/RewardBackground.svg">
      <BackButton url="/home" />
      <div className="flex flex-col justify-center items-center gap-11">
        <h1 className="text-7xl text-center max-w-[600px] font-bold tracking-wide">
          ELIGE TU DESCUENTO
        </h1>
        <ListRewards />
      </div>
    </ScreenLayout>
  );
};

export default Rewards;
