import { usePageData } from '../../hooks/usePageData'

import {
  BackgroundButtonEnum,
  BorderColorEnum,
  BorderRadiusEnum,
  FontSizeEnum,
  MetaDataExample,
} from '../../interfaces'

import Button from '../../components/button'
import ScreenLayout from '../../components/layout/screenLayout'

const Example = () => {
  const {
    data: metas,
    loading,
    error,
  } = usePageData<MetaDataExample>('Example')

  if (loading || error || !metas) {
    return (
      <div>
        {loading
          ? 'Loading...'
          : error
            ? `Error: ${error}`
            : 'No metadata available'}
      </div>
    )
  }

  return (
    <ScreenLayout image={metas.background}>
      <div className="relative flex flex-col justify-center items-center h-screen select-none gap-16">
        <div className="flex flex-col justify-center items-center w-[550px]">
          <span className="text-6xl text-center">
            {metas?.description ||
              'Inserta tu envase con el código de barras hacia arriba'}
          </span>
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
