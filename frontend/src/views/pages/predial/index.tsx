import BackButton from '../../../components/backButton/BackButton';
import RewardsBackground from '../../../assets/img/RewardsBackground.svg'
import PredialList from './components/predialList';



const PredialPoints = () => {

    return(
          <div className="relative w-full h-screen font-sans" style={{ backgroundImage: `url(${RewardsBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <BackButton />
            <div className='flex flex-col justify-center items-center gap-11'>
              <h1 className='text-7xl text-center max-w-[500px] font-bold tracking-wide'>BUSCA TU PREDIO</h1>
              <PredialList />
            </div>
          </div>
    );
       
      };
      
      export default PredialPoints;