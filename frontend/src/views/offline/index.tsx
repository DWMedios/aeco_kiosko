import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Icon } from '../../interfaces'
import ScreenLayout from '../../components/layout/screenLayout'

const LoadingOffline = ({ icon = 'loading' }: Icon) => {
  const navigation = useNavigate()
  const intervalMs = 360000 // 1 hour
  const timerRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
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
          const apiResponse = await fetch(
            'https://ayuntaeco.com/api/v1/auth/login',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username: 'user', password: 'pass' }),
            },
          )
          if (apiResponse) navigation('/home')
        } catch (apiError) {
          console.log(apiError)
        }
      }
    } catch (networkError) {
      console.error(networkError)
    }
  }
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
