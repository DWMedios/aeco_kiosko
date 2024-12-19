import { ScreenLayoutProps } from '../../interfaces'
import CountdownTimer from '../timer'
import ImageBackground from './components/imageBackground'

const ScreenLayout = ({
  children,
  image,
  showTimer = true,
  timerInitialTime = 60,
}: ScreenLayoutProps) => {
  return (
    <>
      {image && <ImageBackground url={image} />}
      <div className="relative z-10 h-screen">
        {children}
        {showTimer && <CountdownTimer initialTime={timerInitialTime} />}
      </div>
    </>
  )
}

export default ScreenLayout
