import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Icon } from '../../interfaces'
import ScreenLayout from '../../components/layout/screenLayout'
import WebApiAeco from '../../api/webApiAeco'

const Offline = ({ icon = 'FueraServicio' }: Icon) => {
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
      const response = await WebApiAeco.getMachine()
      if (!response.success) {
        if (response.message === 'API-UP') return navigation('/home')
      }
    } catch (networkError) {
      console.error( networkError)
    }
  }

  return (
    <ScreenLayout image="bg-offline-loading.png" showTimer={false}>
      <div className="relative flex flex-col h-screen">
        <div className="relative flex-grow flex justify-center items-center">
          <span className='text-3xl font-bold'>
            <h1>FUERA DE SERVICIO</h1>
          </span>
        </div>
        <div className="relative flex-grow flex justify-center items-center">
          <img src={`/images/${icon}.png`} alt="Logo" />
        </div>
      </div>
    </ScreenLayout>
  )
}

export default Offline
