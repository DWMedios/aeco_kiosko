import BackButton from '../../components/backButton/BackButton'
import ScreenLayout from '../../components/layout/screenLayout'
import ListDiscounts from './components/listDiscounts'

const Discounts = () => {
  return (
    <ScreenLayout image="shrubbery.png">
      <div className="flex flex-col justify-center items-center gap-11 h-screen select-none">
        <BackButton url="/rewards" />
        <h1 className="text-8xl text-center max-w-[900px] font-bold tracking-wider mb-20">
          ELIGE TU DESCUENTO
        </h1>
        <ListDiscounts />
      </div>
    </ScreenLayout>
  )
}

export default Discounts
