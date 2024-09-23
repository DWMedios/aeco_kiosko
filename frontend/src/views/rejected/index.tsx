import ScreenLayout from "../../components/layout/screenLayout";
import Button from "../../components/button";
import { BackgroundButtonEnum, BorderRadiusEnum, FontSizeEnum, MetaDataRejected, TextColorEnum } from '../../interfaces';
import { usePageData } from '../../hooks/usePageData';

const Rejected = () => {
  const { data: metas, loading, error } = usePageData<MetaDataRejected>('Rejected');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!metas) return <div>No metadata available</div>;

  return (
    <ScreenLayout image={metas.background}>
      <div className="relative flex flex-col justify-center items-center h-screen select-none gap-12">
        <div className="flex flex-col justify-center items-center w-[500px]">
          <span className="font-extrabold text-8xl text-center tracking-wider">
            {metas.title}
          </span>
        </div>
        <img
          src={metas.centerImage}
          alt="Rejected image"
          className="m-10 mb-20 w-auto h-96"
        />

        <Button 
        label={metas.buttonUp.label}  
        url={metas.buttonUp.url}
        bgColor={BackgroundButtonEnum[metas.buttonUp.bgColor as keyof typeof BackgroundButtonEnum]} 
        textColor={TextColorEnum.white}
        borderRadius={BorderRadiusEnum[metas.buttonUp.borderRadious as keyof typeof BorderRadiusEnum]} 
        fontSize={FontSizeEnum[metas.buttonUp.fontSize as keyof typeof FontSizeEnum]} 
        />
        
        <Button 
          label={metas.buttonDown.label}
          url={metas.buttonDown.url}
          bgColor={BackgroundButtonEnum[metas.buttonDown.bgColor as keyof typeof BackgroundButtonEnum]} 
          textColor={TextColorEnum.white}
          borderRadius={BorderRadiusEnum[metas.buttonDown.borderRadious as keyof typeof BorderRadiusEnum]} 
          fontSize={FontSizeEnum[metas.buttonDown.fontSize as keyof typeof FontSizeEnum]} 
        />
        
        <Button 
        label={metas.modalRight.title}
        url={metas.modalRight.url}
        fontSize={FontSizeEnum[metas.modalRight.fintSize as keyof typeof FontSizeEnum]} 
        />
      </div>
    </ScreenLayout>
  );
};

export default Rejected;