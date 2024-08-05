
import BackgroundImage from '../../../assets/img/home_Background.svg'
import Navbar from './components/Navbar'
import AecoLogo from '../../../assets/img/aeco.svg'
import ReciclaYGana from '../../../assets/img/reciclaygana.svg'
import Footer from './components/Footer'
import SocialMediaList from './components/SocialMediaList'
import ButtonStart from './components/ButtonStart'
import LangHelp from './components/LangHelp'

function Home() {
  return (
  <div className="relative w-full h-screen font-sans" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="relative z-10 flex flex-auto items-center flex-col w-full h-full pt-8 justify-between">
      <Navbar />
      <img className='w-80 mt-5' src={AecoLogo} alt='AECO Logo'/>
      <img className='w-11/12 mt-5' src={ReciclaYGana} alt='AECO Logo'/>
      <LangHelp />
      <ButtonStart />
      <SocialMediaList />
      <Footer />
    </div>
  </div>
  )
}

export default Home