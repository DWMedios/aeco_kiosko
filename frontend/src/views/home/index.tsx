import { useEffect } from 'react'
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
import { ClearCountPackings } from '../../utils/savePackaging'

function Home() {
  const { data: metas, loading, error } = usePageData<MetaDataHome>('Home')

  useEffect(() => {
    ClearCountPackings()
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
    <ScreenLayout image={metas.imgBg} showTimer={false}>
      <div className="relative z-10 flex flex-auto items-center flex-col w-full pt-8 justify-center bg-transparent h-screen">
        <Navbar />
        <img
          className="w-[500px] fixed top-44"
          src={metas.logoUp.imgUp}
          alt={metas.logoUp.alt}
        />
        <img
          className="w-11/12 fixed top-1/4"
          src={metas.logoDown.imgDown}
          alt={metas.logoDown.alt}
        />
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
