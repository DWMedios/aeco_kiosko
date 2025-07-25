import { useEffect, useRef } from 'react'
import { usePageData } from '../../hooks/usePageData'
import { MetaDataHome } from '../../interfaces'
import {
  BackgroundButtonEnum,
  BorderRadiusEnum,
  FontSizeEnum,
  PositionButtonEnum,
  TextColorEnum,
} from '../../interfaces'

import Button from '../../components/button'
import Footer from './components/Footer'
import LangHelp from './components/LangHelp'
import Navbar from './components/Navbar'
import ScreenLayout from '../../components/layout/screenLayout'
import SocialMediaList from './components/SocialMediaList'
import { setLocalStorage } from '../../utils/manageStorage'
import { GetTicket } from '../../utils/savePackaging'
import { useNavigate } from 'react-router-dom'

function Home() {
  const { data: metas, loading, error } = usePageData<MetaDataHome>('Home')
  const navigation = useNavigate()
  const intervalMs = 360000 // 1 hour
  const timerRef = useRef<NodeJS.Timeout>()
  useEffect(() => {
    localStorage.clear()
    setLocalStorage('ticket', '')
    GetTicket()
    validateMachine()
    timerRef.current = setInterval(() => {
      validateMachine()
    }, intervalMs)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  const validateMachine = async () => {
    try {
      const internetResponse = await fetch('https://www.google.com', {
        method: 'HEAD',
      })

      if (internetResponse.ok) {
        try {
          const apiResponse = await fetch('https://mi-api.com/endpoint')
          if (!apiResponse.ok)
        } catch (apiError) {
          navigation('/offline')
        }
      }
    } catch (networkError) {
      console.error(networkError)
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
    <ScreenLayout image={metas.imgBg} showTimer={false}>
      <div className="relative z-10 flex flex-auto items-center flex-col w-full pt-8 justify-center bg-transparent h-screen">
        <Navbar />
        <img className="w-[500px] fixed top-44" src={metas.imgUp} />
        <img className="w-11/12 fixed top-1/4" src={metas.imgDown} />
        <LangHelp />
        <Button
          label={metas.button.label}
          bgColor={
            BackgroundButtonEnum[
              metas.button.bgColor as keyof typeof BackgroundButtonEnum
            ]
          }
          textColor={TextColorEnum.white}
          url={metas.button.url}
          borderRadius={
            BorderRadiusEnum[
              metas.button.borderRadious as keyof typeof BorderRadiusEnum
            ]
          }
          fontSize={
            FontSizeEnum[metas.button.fontSize as keyof typeof FontSizeEnum]
          }
          positionButton={PositionButtonEnum.fixed}
          borderColor={null}
        />

        <SocialMediaList />
        <Footer />
      </div>
    </ScreenLayout>
  )
}

export default Home
