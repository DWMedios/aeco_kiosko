import ScreenLayout from '../../components/layout/screenLayout'
import Button from '../../components/button'
import {
  BackgroundButtonEnum,
  FontSizeEnum,
  TextColorEnum,
} from '../../interfaces'

const Rejected = () => {
  return (
    <ScreenLayout image="leafBackground.png">
      <div className="relative flex flex-col justify-center items-center h-screen select-none gap-12">
        <div className="flex flex-col justify-center items-center w-[500px]">
          <span className="font-extrabold text-8xl text-center tracking-wider">
            ENVASE RECHAZADO
          </span>
        </div>
        <img
          src="/images/rejected.png"
          alt=""
          className="m-10 mb-20 w-auto h-96"
        />

        <Button
          label="INTENTAR CON OTRO ENVASE"
          url="/insert"
          bgColor={BackgroundButtonEnum.green}
          borderColor={null}
          textColor={TextColorEnum.white}
          fontSize={FontSizeEnum.xl6}
        />

        <Button
          label="FINALIZAR"
          url="/rewards"
          borderColor="border-4 border-[#FE5A8F]"
          textColor={TextColorEnum.pink}
          fontSize={FontSizeEnum.xl6}
        />

        <Button
          label="AÑADIR CODIGO DE BARRAS"
          url="/add_barcode"
          fontSize={FontSizeEnum.xl6}
        />
      </div>
    </ScreenLayout>
  )
}

export default Rejected
