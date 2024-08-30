import { useEffect } from 'react'
import WebApiAeco from '../../api/webApiAeco'
import Button from '../../components/button'
import ScreenLayout from '../../components/layout/screenLayout'
import Footer from './components/Footer'
import LangHelp from './components/LangHelp'
import Navbar from './components/Navbar'
import SocialMediaList from './components/SocialMediaList'

function Home() {
  useEffect(() => {
    getCompany()
  })

  const getCompany = async () => {
    try {
      const response = await WebApiAeco.getCompany()
      console.log(response)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }
  return (
    <ScreenLayout image="home_background.png">
      <div className="relative z-10 flex flex-auto items-center flex-col w-full h-[1280px] pt-8 justify-between bg-transparent">
        <Navbar />
        <img className="w-80" src="/images/aeco.svg" alt="AECO Logo" />
        <img
          className="w-11/12"
          src="/images/reciclaygana.svg"
          alt="AECO Logo"
        />
        <LangHelp />
        <Button
          label="iniciar"
          bgColor="bg-pink-500"
          borderColor={null}
          textColor={'white'}
          url="/conditions"
        />
        <SocialMediaList />
        <Footer />
      </div>
    </ScreenLayout>
  )
}

export default Home
