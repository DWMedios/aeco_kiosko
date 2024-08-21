import BackButton from '../../../components/backButton/BackButton';
import RewardsBackground from '../../../assets/img/RewardsBackground.svg'
import RecyclePointsList from './components/recyclePointsList';


const RecyclePoints = () => {

    return(
          <div className="relative w-full h-screen font-sans" style={{ backgroundImage: `url(${RewardsBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <BackButton />
            <div className='flex flex-col justify-center items-center gap-11'>
              <h1 className='text-7xl text-center max-w-[500px] font-bold tracking-wide'>INTRODUCE TU NÚMERO</h1>
              <RecyclePointsList />
            </div>
          </div>
    );
       
      };
      
      export default RecyclePoints;