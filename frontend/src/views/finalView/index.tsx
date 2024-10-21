import { useNavigate } from 'react-router-dom'
import ScreenLayout from '../../components/layout/screenLayout'
import { useEffect } from 'react'
import QRCodeComponent from '../../components/qrCode'

const FinalView = () => {
  const QrCodeUrl =
    ' https://wa.me/9861190181?text=Hola%20Ayuntaeco%20|%20¡Estoy%20interesado%20en%20el%20proyecto!'

  const navigation = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      console.log('Termino el tiempo')
      navigation('/home')
    }, 15000)
  })

  return (
    <ScreenLayout image="lastView.png">
      <div className="flex flex-col justify-center items-center text-center gap-16 h-screen select-none z-10">
        <h1 className="text-7xl font-normal z-10 mb-12 w-[600px]">
          ¿TE INTERESA EL PROYECTO?
        </h1>
        <div className="w-full z-10 flex justify-center">
          <QRCodeComponent value={QrCodeUrl} />
        </div>
        <span className="border-8 border-[#00804F] w-[600px] h-[150px] rounded-xl flex justify-center items-center font-bold text-6xl text-[#027333] z-10 bg-white">
          ayuntaeco.com{' '}
        </span>
        <p className="text-6xl font-normal z-10 tracking-wider w-[500px]">
          ¡Gracias por tu colaboración!
        </p>
      </div>
    </ScreenLayout>
  )
}

export default FinalView
