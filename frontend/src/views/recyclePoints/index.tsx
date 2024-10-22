import BackButton from '../../components/backButton/BackButton'
import ScreenLayout from '../../components/layout/screenLayout'
import RecyclePointsList from './components/recyclePointsList'

const RecyclePoints = () => {
  return (
    <ScreenLayout image="RewardsBackground.svg">
      <div className="flex flex-col justify-center items-center gap-11 h-screen z-10">
        <BackButton url="/rewards" />
        <h1 className="text-8xl text-center max-w-[800px] font-bold tracking-wider z-10">
          INTRODUCE TU NÚMERO
        </h1>
        <RecyclePointsList />
      </div>
    </ScreenLayout>
  )
}

export default RecyclePoints
