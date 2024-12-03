import { Layout } from '../../interfaces'
import CountdownTimer from '../timer'
import ImageBackground from './components/imageBackground'

interface ScreenLayoutProps extends Layout {
  showTimer?: boolean // Nueva propiedad para mostrar u ocultar el temporizador
  timerInitialTime?: number // Tiempo inicial para el temporizador (si lo necesitas)
}

const ScreenLayout = ({
  children,
  image,
  showTimer = false,
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
