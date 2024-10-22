import Button from '../../components/button'
import ScreenLayout from '../../components/layout/screenLayout'
import { usePageData } from '../../hooks/usePageData'
import {
  BackgroundButtonEnum,
  BorderColorEnum,
  BorderRadiusEnum,
  FontSizeEnum,
  MetaDataExample,
} from '../../interfaces'

const Example = () => {
  const {
    data: metas,
    loading,
    error,
  } = usePageData<MetaDataExample>('Example')
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!metas) return <div>No metadata available</div>

  return (
    <ScreenLayout image={metas.background}>
      <div className="relative flex flex-col justify-center items-center h-screen select-none gap-16">
        <div className="flex flex-col justify-center items-center w-[550px]">
          <span className="text-6xl text-center">{metas.description}</span>
        </div>
        <img
          src={metas.centerImage}
          alt="Example image"
          className="m-20 w-80 h-[600px]"
        />

        <Button
          label={metas.button.label}
          url={metas.button.url}
          fontSize={
            FontSizeEnum[metas.button.fontSize as keyof typeof FontSizeEnum]
          }
          bgColor={
            BackgroundButtonEnum[
              metas.button.bgColor as keyof typeof BackgroundButtonEnum
            ]
          }
          borderRadius={
            BorderRadiusEnum[
              metas.button.borderRadious as keyof typeof BorderRadiusEnum
            ]
          }
          borderColor={
            BorderColorEnum[
              metas.button.borderColor as keyof typeof BorderColorEnum
            ]
          }
        />
      </div>
    </ScreenLayout>
  )
}

export default Example
