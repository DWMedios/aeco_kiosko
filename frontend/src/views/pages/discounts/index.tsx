import RewardsBackground from '../../../assets/img/RewardsBackground.svg'
import BackButton from '../../../components/backButton/BackButton';
import DiscountsList from './components/discountsList';

const Discounts = () => {

return(
      <div className="relative w-full h-screen font-sans" style={{ backgroundImage: `url(${RewardsBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <BackButton />
        <div className='flex flex-col justify-center items-center gap-11'>
          <h1 className='text-7xl text-center max-w-[600px] font-bold tracking-wide'>ELIGE TU DESCUENTO</h1>
            <DiscountsList />
        </div>
      </div>
);
   
  };
  
  export default Discounts;