import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ScreenLayout from '../../components/layout/screenLayout'
import { Icon } from '../../interfaces'

const LoadingOffline = ({ icon = 'loading' }: Icon) => {
  const navigation = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      console.log('Termino el timepo')
      navigation('/home')
    }, 3000)
  })

  return (
    <ScreenLayout image="bg-offline-loading.png">
      <div className="relative flex flex-col h-screen">
        <div className="relative flex-grow flex justify-center items-center">
          <img src={`/images/${icon}.png`} alt="Logo" />
        </div>
      </div>
    </ScreenLayout>
  )
}

export default LoadingOffline
