import { useEffect } from 'react'
import { usePageData } from '../../hooks/usePageData'
import {
  BackgroundButtonEnum,
  BorderColorEnum,
  BorderRadiusEnum,
  FontSizeEnum,
  MetaDataRejected,
  TextColorEnum,
} from '../../interfaces'
import { sendCommands } from '../../utils/commands'
import Button from '../../components/button'
import ScreenLayout from '../../components/layout/screenLayout'
import useWebSocket from '../../hooks/useWebSocket'
import useTranslate from '../../hooks/useTranslate'
import { GetTicket } from '../../utils/savePackaging'
import { useNavigate } from 'react-router-dom'

const Rejected = () => {
  const { t } = useTranslate()

  const {
    data: metas,
    loading,
    error,
  } = usePageData<MetaDataRejected>('Rejected')
  const navigation = useNavigate()
  const { sendCommand } = useWebSocket()

  useEffect(() => {
    sendCommand(sendCommands.INITIAL_SETUP_LOCK_ALL)
  }, [])

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

  const NextSteep = async () => {
    const packings = GetTicket()
    if (packings) {
      // const saveMovement = await SaveProccess()
      // if (saveMovement) {
      sendCommand(sendCommands.FINISH_NO_READ_BOTTLE)
      navigation('/reward_categories')
      // }
    } else {
      sendCommand(sendCommands.FINISH_NO_READ_BOTTLE)
      navigation('/home')
    }
  }

  return (
    <ScreenLayout image={metas.imgBg}>
      <div className="relative flex flex-col justify-center items-center h-screen select-none gap-12">
        <div className="flex flex-col justify-center items-center w-[500px]">
          <span className="font-extrabold text-8xl uppercase text-center tracking-wider">
            {metas?.title || t('rejected.title')}
          </span>
        </div>
        <img
          src={metas.imgCenter}
          alt="Rejected image"
          className="m-10 mb-20 w-auto h-96"
        />

        <Button
          action={() => sendCommand(sendCommands.INITIATE_BOTTLE_INSERT)}
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
          label={metas.buttonCenter.label}
          url={metas.buttonCenter.url}
          bgColor={
            BackgroundButtonEnum[
              metas.buttonCenter.bgColor as keyof typeof BackgroundButtonEnum
            ]
          }
          textColor={TextColorEnum.white}
          borderRadius={
            BorderRadiusEnum[
              metas.buttonCenter.borderRadious as keyof typeof BorderRadiusEnum
            ]
          }
          fontSize={
            FontSizeEnum[
              metas.buttonCenter.fontSize as keyof typeof FontSizeEnum
            ]
          }
        />

        <Button
          action={() => NextSteep()}
          label={metas.buttonDown.label}
          textColor={TextColorEnum.black}
          borderRadius={
            BorderRadiusEnum[
              metas.buttonDown.borderRadious as keyof typeof BorderRadiusEnum
            ]
          }
          fontSize={
            FontSizeEnum[metas.buttonDown.fontSize as keyof typeof FontSizeEnum]
          }
          borderColor={
            BorderColorEnum[
              metas.buttonDown.borderColor as keyof typeof BorderColorEnum
            ]
          }
        />
      </div>
    </ScreenLayout>
  )
}

export default Rejected
