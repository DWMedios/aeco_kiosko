import { Layout } from '../../interfaces'
import ImageBackground from './components/imageBackground'

const ScreenLayout = ({ children, image }: Layout) => {
  return (
    <>
      <div
        className={`absolute inset-0 bg-[url('/images/${image}')] bg-cover bg-center`}
      />
      <ImageBackground url={image} />
      <div className="h-screen">{children}</div>;
    </>
  )
}

export default ScreenLayout
