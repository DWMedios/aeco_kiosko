import Button from "../../components/button";
import ScreenLayout from "../../components/layout/screenLayout";
import { BackgroundButtonEnum, BorderRadiusEnum, FontSizeEnum, TextColorEnum } from '../../interfaces';
import Footer from "./components/Footer";
import LangHelp from "./components/LangHelp";
import Navbar from "./components/Navbar";
import SocialMediaList from "./components/SocialMediaList";

function Home() {
  return (
    <ScreenLayout image="home_background.png">
      <div className="relative z-10 flex flex-auto items-center flex-col w-full h-[1850px] pt-8 justify-between bg-transparent">
        <Navbar />
        <img className="w-[500px]" src="/images/aeco.svg" alt="AECO Logo" />
        <img
          className="w-11/12"
          src="/images/reciclaygana.svg"
          alt="AECO Logo"
        />
        <LangHelp />
        <Button
          label="iniciar"
          bgColor={BackgroundButtonEnum.pink}
          borderColor={null}
          textColor={TextColorEnum.white}
          url="/conditions"
          borderRadius= {BorderRadiusEnum.full}
          fontSize={FontSizeEnum.xl7}        />
        <SocialMediaList />
        <Footer />
      </div>
    </ScreenLayout>
  );
}

export default Home;
