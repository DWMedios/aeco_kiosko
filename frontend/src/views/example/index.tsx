import Button from "../../components/button";
import ScreenLayout from "../../components/layout/screenLayout";
import { usePageData } from '../../hooks/usePageData';
import { BackgroundButtonEnum, BorderColorEnum, BorderRadiusEnum, FontSizeEnum, MetaDataExample } from '../../interfaces';

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
        label={metas.button.label}
        url={metas.button.url}
        fontSize={FontSizeEnum[metas.button.fontSize as keyof typeof FontSizeEnum]}
        bgColor={BackgroundButtonEnum[metas.button.bgColor as keyof typeof BackgroundButtonEnum]}
        borderRadius={BorderRadiusEnum[metas.button.borderRadious as keyof typeof BorderRadiusEnum]}
        borderColor={BorderColorEnum [metas.button.borderColor as keyof typeof BorderColorEnum]}
        />
        
      </div>
    </ScreenLayout>
  )
}

export default Example
