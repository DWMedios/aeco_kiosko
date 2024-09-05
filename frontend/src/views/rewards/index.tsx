import BackButton from "../../components/backButton/BackButton";
import ScreenLayout from "../../components/layout/screenLayout";
import ListRewards from "./components/listRewards";
import Modal from './components/modal';

const Rewards = () => {
  return (
    <ScreenLayout image="shrubbery.png">
      <BackButton url="/example" imageSrc='images/backbutton.png'/>
      <div className="flex flex-col justify-center items-center gap-11">
        <h1 className='text-7xl z-10 text-center max-w-[600px] font-bold tracking-wide'>ELIGE TU RECOMPENSA</h1>
        <ListRewards />
      </div>
      <Modal />
    </ScreenLayout>
  );
};

export default Rewards;
