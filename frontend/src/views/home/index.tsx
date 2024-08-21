import ScreenLayout from "../../components/layout/screenLayout";
import ButtonStart from "./components/ButtonStart";
import Footer from "./components/Footer";
import LangHelp from "./components/LangHelp";
import Navbar from "./components/Navbar";
import SocialMediaList from "./components/SocialMediaList";

function Home() {
  return (
    <ScreenLayout image="home_Background.svg">
      <div className="relative z-10 flex flex-auto items-center flex-col w-full h-full pt-8 justify-between">
        <Navbar />
        <img className="w-80" src="/images/aeco.svg" alt="AECO Logo" />
        <img
          className="w-11/12"
          src="/images/reciclaygana.svg"
          alt="AECO Logo"
        />
        <LangHelp />
        <ButtonStart />
        <SocialMediaList />
        <Footer />
      </div>
    </ScreenLayout>
  );
}

export default Home;
