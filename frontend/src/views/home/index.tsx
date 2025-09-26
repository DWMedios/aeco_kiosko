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
import ScreenLayout from '../../components/layout/screenLayout'
import SocialMediaList from './components/SocialMediaList'
import { setLocalStorage } from '../../utils/manageStorage'
import { GetTicket } from '../../utils/savePackaging'
// import { useNavigate } from 'react-router-dom'
// import WebApiAeco from '../../api/webApiAeco'

function Home() {
  const { data: metas, loading, error } = usePageData<MetaDataHome>('Home')
  // const navigation = useNavigate()
  // const intervalMs = 5000 // 1 hour
  // const timerRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    localStorage.clear()
    setLocalStorage('ticket', '')
    GetTicket()
    // validateMachine()
    // timerRef.current = setInterval(() => {
    //   validateMachine()
    // }, intervalMs)

    // return () => {
    //   if (timerRef.current) {
    //     clearInterval(timerRef.current)
    //   }
    // }
  }, [])

  // const validateMachine = async () => {
  //   try {
  //     const response = await WebApiAeco.getMachine()
  //     if (!response.success) {
  //       if (response.message === 'API-DOWN') return navigation('/offline')
  //     }
  //   } catch (networkError) {
  //     console.error(networkError)
  //   }
  // }

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
    // <ScreenLayout image={metas.imgBg} showTimer={false}>
    <ScreenLayout image={'fondohomeanahuac.jpeg'} showTimer={false}>
      <div className="relative z-10 flex flex-auto items-center flex-col w-full pt-8 justify-center bg-transparent h-screen">
        {/* <Navbar /> */}
        {/* <img className="w-[500px] fixed top-44" src={metas.imgUp} /> */}
        {/* <img className="w-11/12 fixed top-1/4" src={metas.imgDown} /> */}
        {/* <LangHelp /> */}
        <Button
          label={metas.button.label}
          bgColor={
            BackgroundButtonEnum['orange' as keyof typeof BackgroundButtonEnum]
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
