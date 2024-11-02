import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '../../interfaces'
import ScreenLayout from '../../components/layout/screenLayout'
import useWebSocket from '../../hooks/useWebSocket'

const LoadingOffline = ({ icon = 'loading' }: Icon) => {
  const navigation = useNavigate()
  const { sendMessage, socketOn } = useWebSocket()

  useEffect(() => {
    if (socketOn) sendMessage('YLWDY')
  }, [socketOn])

  useEffect(() => {
    setTimeout(() => {
      console.log('Termino el tiempo')
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
