import { Link } from 'react-router-dom';
import BackgroundLang from '../../../assets/img/language_background.svg';
import BackButton from '../../../components/backButton/BackButton';
import ChooseLanguage from './components/ChooseLanguage';


function Language() {
  return (
    <>
    <div className="relative w-full h-screen font-sans" style={{ backgroundImage: `url(${BackgroundLang})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Link to="/home">
        <BackButton />
      </Link>
      <ChooseLanguage />
    </div>
    </>
  );
}

export default Language;
