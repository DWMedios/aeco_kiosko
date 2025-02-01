import { usePageData } from '../../hooks/usePageData'

import {
  BackgroundButtonEnum,
  BorderRadiusEnum,
  FontSizeEnum,
  MetaDataUnidentified,
  TextColorEnum,
} from '../../interfaces'

import Button from '../../components/button'
import ScreenLayout from '../../components/layout/screenLayout'
import { useEffect } from 'react'
import useWebSocket from '../../hooks/useWebSocket'
import { GetPackagings, SavePreoccess } from '../../utils/savePackaging'
import { useNavigate } from 'react-router-dom'
import useTranslate from '../../hooks/useTranslate'

const Unidentified = () => {

  const { t } = useTranslate();
  
  const {
    data: metas,
    loading,
    error,
  } = usePageData<MetaDataUnidentified>('Unidentified')
  const navigation = useNavigate()
  const { sendCommand } = useWebSocket()

  useEffect(() => {
    sendCommand('YLWDY')
  }, [])

  const NextSteep = async () => {
    const packings = GetPackagings()
    if (packings) {
      const saveMovement = await SavePreoccess({
        can_number: packings.can,
        bottle_number: packings.bottle,
        folio: '1',
        synchronized: false,
      })
      if (saveMovement) {
        sendCommand('XYDB')
        navigation(metas!.buttonDown.url)
      }
    } else {
      sendCommand('XYYLIYLEYLDV')
      sendCommand('YLWDY')
      navigation('/home')
    }
  }

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
        <div className="flex flex-col justify-center items-center">
          <span className="font-extrabold text-8xl uppercase text-center tracking-wider">
            {metas?.title || t('unidentified.title')}
          </span>
        </div>
        <img
          src="/images/unidentified.png"
          alt="Unidentified image"
          className="m-10 mb-20 w-auto h-96"
        />

        <Button
          action={() => sendCommand('BEB')}
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
          // url={metas.buttonDown.url}
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
