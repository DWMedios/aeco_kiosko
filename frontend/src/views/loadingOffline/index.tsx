import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Icon } from '../../interfaces'
import ScreenLayout from '../../components/layout/screenLayout'
import savePaperStatus from '../../hooks/usePaperStatus'

const LoadingOffline = ({ icon = 'loading' }: Icon) => {
  const navigation = useNavigate()

  useEffect(() => {
    savePaperStatus()
    setTimeout(() => {
      navigation('/home')
    }, 3000)
  })

  return (
    <ScreenLayout image="bg-offline-loading.png" showTimer={false}>
      <div className="relative flex flex-col h-screen">
        <div className="relative flex-grow flex justify-center items-center">
          <img src={`/images/${icon}.png`} alt="Logo" />
        </div>
      </div>
    </ScreenLayout>
  )
}

export default LoadingOffline
