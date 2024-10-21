import { Layout } from '../../interfaces'
import ImageBackground from './components/imageBackground'

const ScreenLayout = ({ children, image }: Layout) => {
  return (
    <>
      {image && <ImageBackground url={image} />}
      <div className="relative z-10 h-screen">{children}</div>
    </>
  )
}

export default ScreenLayout
