import BackButton from "../../components/backButton/BackButton";
import ScreenLayout from "../../components/layout/screenLayout";
import ChooseLanguage from "./components/ChooseLanguage";

function Language() {
  return (
    <>
      <ScreenLayout image="language_background.svg">
        <BackButton url="/home" imageSrc='/public/images/backbutton.png'/>
        <ChooseLanguage />
      </ScreenLayout>
    </>
  );
}

export default Language;
