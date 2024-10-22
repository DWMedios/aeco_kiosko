import ScreenLayout from '../../components/layout/screenLayout'
import Button from '../../components/button'
import {
  BackgroundButtonEnum,
  BorderRadiusEnum,
  FontSizeEnum,
  MetaDataUnidentified,
  TextColorEnum,
} from '../../interfaces'
import { usePageData } from '../../hooks/usePageData'

const Unidentified = () => {
  const {
    data: metas,
    loading,
    error,
  } = usePageData<MetaDataUnidentified>('Unidentified')

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!metas) return <div>No metadata available</div>

  return (
    <ScreenLayout image={metas.background}>
      <div className="relative flex flex-col justify-center items-center h-screen select-none gap-16">
        <div className="flex flex-col justify-center items-center">
          <span className="font-extrabold text-8xl text-center tracking-wider">
            {metas.title}
          </span>
        </div>
        <img
          src="/images/unidentified.png"
          alt="Unidentified image"
          className="m-10 mb-20 w-auto h-96"
        />

        <Button
          label={metas.buttonUp.label}
          url={metas.buttonUp.url}
          bgColor={
            BackgroundButtonEnum[
              metas.buttonUp.bgColor as keyof typeof BackgroundButtonEnum
            ]
          }
          textColor={TextColorEnum.white}
          borderRadius={
            BorderRadiusEnum[
              metas.buttonUp.borderRadious as keyof typeof BorderRadiusEnum
            ]
          }
          fontSize={
            FontSizeEnum[metas.buttonUp.fontSize as keyof typeof FontSizeEnum]
          }
        />

        <Button
          label={metas.buttonDown.label}
          url={metas.buttonDown.url}
          bgColor={
            BackgroundButtonEnum[
              metas.buttonDown.bgColor as keyof typeof BackgroundButtonEnum
            ]
          }
          textColor={TextColorEnum.white}
          borderRadius={
            BorderRadiusEnum[
              metas.buttonDown.borderRadious as keyof typeof BorderRadiusEnum
            ]
          }
          fontSize={
            FontSizeEnum[metas.buttonDown.fontSize as keyof typeof FontSizeEnum]
          }
        />
      </div>
    </ScreenLayout>
  )
}

export default Unidentified
