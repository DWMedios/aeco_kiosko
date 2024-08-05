import { Link } from 'react-router-dom';
import BackgroundLang from '../../../assets/img/language_background.svg'
import BackButton from '../../../components/backButton/BackButton';

function Help() {
    return (
        <div className="relative w-full h-screen font-sans" style={{ backgroundImage: `url(${BackgroundLang})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Link to="/home">
                <BackButton />
            </Link>
            <div>
                <h1 className='text-5xl text-center min-h-[800px] flex justify-center items-center'>Soporte</h1>
            </div>
        </div>
      )
}

export default Help