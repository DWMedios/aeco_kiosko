import { usePageData } from '../../hooks/usePageData'

import {
  BackgroundButtonEnum,
  BorderColorEnum,
  BorderRadiusEnum,
  FontSizeEnum,
  MetaDataExample,
} from '../../interfaces'
import { sendCommands } from '../../utils/commands'

import Button from '../../components/button'
import ScreenLayout from '../../components/layout/screenLayout'
import BackButton from '../../components/backButton'
import useWebSocket from '../../hooks/useWebSocket'
import useTranslate from '../../hooks/useTranslate'

const Example = () => {
  const { t } = useTranslate()

  const {
    data: metas,
    loading,
    error,
  } = usePageData<MetaDataExample>('Example')
  const { sendCommand } = useWebSocket()

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
    <ScreenLayout image={metas.imgBg}>
      <div className="relative flex flex-col justify-center items-center h-screen select-none gap-16">
        <BackButton url="/home" />
        <div className="flex flex-col justify-center items-center w-[550px]">
          <span className="text-6xl text-center normal-case">
            {metas?.description || t('example.description')}
          </span>
        </div>
        <img
          src={metas.imgCenter}
          alt="Example image"
          className="m-20 w-80 h-[600px]"
        />

        <Button
          action={() => sendCommand(sendCommands.INITIATE_BOTTLE_INSERT)}
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
