import { Link } from 'react-router-dom';
import BackgroundHelp from '../../../assets/img/help_background.svg'
import BackButton from '../../../components/backButton/BackButton';
import QrCode from '../../../assets/img/QRcode.svg'
import WhatsappLogo from '../../../assets/img/whatsapp_logo.svg'

function Help() {
    return (
        <div className="relative w-full h-screen font-sans" style={{ backgroundImage: `url(${BackgroundHelp})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Link to="/home">
                <BackButton />
            </Link>
            <div className='text-center min-h-[1000px] flex flex-col justify-center items-center'>
                <h1 className='text-5xl mt-24  mb-10 max-w-[300px]'>Soporte</h1>
                <p className='text-2xl max-w-[300px] mb-5'>Cualquier duda o aclaración estamos para escucharte. <br /><br /> Envianos un WhatsApp </p>
                <img className='w-[450px]' src={QrCode} alt='QR Code' />
                <img className='w-20 mt-4' src={WhatsappLogo} alt='QR Code' />
                <p className='text-4xl font-bold max-w-[350px] mb-5 mt-5'>+52 999 888 7777 </p>
                <p className='text-2xl max-w-[300px]'>¡Gracias por tu colaboración! </p>
            </div>
        </div>
      )
}

export default Help