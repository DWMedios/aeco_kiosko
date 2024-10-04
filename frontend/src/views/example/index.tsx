import Button from '../../components/button'
import ScreenLayout from '../../components/layout/screenLayout'
import { FontSizeEnum } from '../../interfaces'

const Example = () => {
  return (
    <ScreenLayout image="leafBackground.png">
      <div className="relative flex flex-col justify-center items-center h-screen select-none gap-16">
        <div className="flex flex-col justify-center items-center w-[550px]">
          <span className="text-6xl text-center">
            Inserta tu envase con el código de barras hacia arriba
          </span>
        </div>
        <img src="/images/example.png" alt="" className="m-20 w-80 h-[600px]" />

        <Button
          label="¡estoy listo!"
          url="/insert"
          fontSize={FontSizeEnum.xl6}
        />
      </div>
    </ScreenLayout>
  )
}

export default Example
