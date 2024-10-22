import BackButton from '../../components/backButton/BackButton'
import ScreenLayout from '../../components/layout/screenLayout'
import ListRewards from './components/listRewards'
import Modal from './components/modal'

const Rewards = () => {
  return (
    <ScreenLayout image="shrubbery.png">
      <div className="flex flex-col justify-center items-center gap-11 h-screen select-none">
        <BackButton url="/example" />
        <h1 className="text-8xl z-10 text-center max-w-[900px] font-bold tracking-wider mb-20">
          ELIGE TU RECOMPENSA
        </h1>
        <ListRewards />
      </div>
      <Modal />
    </ScreenLayout>
  )
}

export default Rewards
