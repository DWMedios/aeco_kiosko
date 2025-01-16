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

import Button from '../../components/button'
import ScreenLayout from '../../components/layout/screenLayout'
import useWebSocket from '../../hooks/useWebSocket'
import { LastPackings } from '../../utils/savePackaging'

const Accepted = () => {
  const {
    data: metas,
    loading,
    error,
  } = usePageData<MetaDataAccepted>('Accepted')
  const [product, setProduct] = useState<Packaging>()
  const { sendCommand } = useWebSocket()

  useEffect(() => {
    sendCommand('YLWDY')
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

  return (
    <ScreenLayout image={metas.imgBg}>
      <div className="flex flex-col justify-center items-center h-screen select-none gap-16">
        <div className="flex flex-col justify-center items-center">
          <span className="font-extrabold text-8xl text-center w-[800px] z-10 tracking-wider">
            {metas?.title || 'ENVASE ACEPTADO'}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center h-[600px]">
          <img
            src={
              product?.packaging === 'lata'
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
          action={() => sendCommand('IBMUB')} //Antes teniamos el BEB lo cambie para probar
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
          action={() => sendCommand('XYDB')}
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
