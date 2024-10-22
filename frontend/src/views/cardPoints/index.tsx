import BackButton from '../../components/backButton/BackButton'
import ScreenLayout from '../../components/layout/screenLayout'
import ListCardPoints from './components/listCardPoints'

const CardPoints = () => {
  return (
    <ScreenLayout image="shrubbery.png">
      <div className="flex flex-col justify-center items-center gap-11 h-screen select-none">
        <BackButton url="/rewards" />
        <h1 className="text-8xl z-10 text-center max-w-[900px] font-bold tracking-wider mb-20">
          ACUMULA PUNTOS
        </h1>
        <ListCardPoints />
      </div>
    </ScreenLayout>
  )
}

export default CardPoints
