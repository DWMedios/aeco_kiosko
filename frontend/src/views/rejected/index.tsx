import ScreenLayout from '../../components/layout/screenLayout'
import Button from '../../components/button'
import {
  BackgroundButtonEnum, BorderColorEnum,
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
          label={metas.buttonCenter.label}
          url={metas.buttonCenter.url}
          bgColor={BackgroundButtonEnum[metas.buttonCenter.bgColor as keyof typeof BackgroundButtonEnum]} 
          textColor={TextColorEnum.white}
          borderRadius={BorderRadiusEnum[metas.buttonCenter.borderRadious as keyof typeof BorderRadiusEnum]} 
          fontSize={FontSizeEnum[metas.buttonCenter.fontSize as keyof typeof FontSizeEnum]} 
        />

        <Button
        label={metas.buttonDown.title}
        url={metas.buttonDown.url}
        textColor={TextColorEnum.black}
        borderRadius={BorderRadiusEnum[metas.buttonDown.borderRadious as keyof typeof BorderRadiusEnum]}
        fontSize={FontSizeEnum[metas.buttonDown.fontSize as keyof typeof FontSizeEnum]}
        borderColor={BorderColorEnum[metas.buttonDown.borderColor as keyof typeof BorderColorEnum]}
        />


        </div>

    </ScreenLayout>
  )
}

export default Rejected
