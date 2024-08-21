import BackButton from '../../../components/backButton/BackButton';
import RewardsBackground from '../../../assets/img/RewardsBackground.svg'
import ListPoints from './components/listPoints';

const Points = () => {

    return(
          <div className="relative w-full h-screen font-sans" style={{ backgroundImage: `url(${RewardsBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <BackButton />
            <div className='flex flex-col justify-center items-center gap-11'>
              <h1 className='text-7xl text-center max-w-[600px] font-bold tracking-wide'>ACUMULA PUNTOS</h1>
              <ListPoints />
            </div>
          </div>
    );
       
      };
      
      export default Points;