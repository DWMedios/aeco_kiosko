import { useEffect, useState } from 'react'
import {
  BackgroundButtonEnum,
  BorderRadiusEnum,
  FontSizeEnum,
  MetaDataAccepted,
  Packaging,
  TextColorEnum,
} from '../../interfaces'
import { usePageData } from '../../hooks/usePageData'
import {
  GetTicket,
  LastPackings,
  SaveProccess,
} from '../../utils/savePackaging'
import { sendCommands } from '../../utils/commands'

import Button from '../../components/button'
import ScreenLayout from '../../components/layout/screenLayout'
import useWebSocket from '../../hooks/useWebSocket'
import useTranslate from '../../hooks/useTranslate'
import { useNavigate } from 'react-router-dom'

const Accepted = () => {
  const { t } = useTranslate()

  const {
    data: metas,
    loading,
    error,
  } = usePageData<MetaDataAccepted>('Accepted')
  const [product, setProduct] = useState<Packaging>()
  const { sendCommand } = useWebSocket()
  const navigation = useNavigate()

  useEffect(() => {
    sendCommand(sendCommands.INITIAL_SETUP_LOCK_ALL)
  }, [])

  useEffect(() => {
    setProduct(LastPackings())
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
      const saveTicket = await SaveProccess()
      if (saveTicket) {
        sendCommand(sendCommands.FINISH_NO_READ_BOTTLE)
        navigation(metas!.buttonDown.url)
      }
    } else {
      sendCommand(sendCommands.FINISH_NO_READ_BOTTLE)
      navigation('/home')
    }
  }

  return (
    <ScreenLayout image={metas.imgBg}>
      <div className="flex flex-col justify-center items-center h-screen select-none gap-16">
        <div className="flex flex-col justify-center items-center">
          <span className="font-extrabold text-8xl uppercase text-center w-[800px] z-10 tracking-wider">
            {metas?.title || t('accepted.title')}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center h-[600px]">
          <img
            src={
              product?.packagingType === 'lata'
                ? '/images/canAccepted.png'
                : '/images/bottleAccepted.png'
            }
            alt="Container"
            className="m-10 mb-20 w-auto h-90"
          />
          <div className="flex flex-col bg-green-500 items-center w-96 rounded-3xl bg-opacity-70 text-white font-medium absolute p-2 tracking-wider">
            <span className="text-5xl font-bold tracking-widest">
              {product?.name}
            </span>
          </div>
        </div>
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
          action={() => NextSteep()}
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

export default Accepted
