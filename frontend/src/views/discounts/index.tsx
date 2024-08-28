import BackButton from "../../components/backButton/BackButton";
import ScreenLayout from "../../components/layout/screenLayout";
import ListDiscounts from './components/listDiscounts';

const Discounts = () => {
  return (
    <ScreenLayout image="shrubbery.png">
      <BackButton url="/rewards" />
      <div className="flex flex-col justify-center items-center gap-11">
        <h1 className="text-7xl text-center max-w-[600px] font-bold tracking-wide">
          ELIGE TU DESCUENTO
        </h1>
        <ListDiscounts />
      </div>
    </ScreenLayout>
  );
};

export default Discounts;
