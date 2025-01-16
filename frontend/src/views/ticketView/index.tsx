import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import ScreenLayout from '../../components/layout/screenLayout'
import Ticket from './components/ticket'

const TicketView = () => {
  const navigation = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      console.log('Termino el tiempo')
      navigation('/final_view')
    }, 10000)
  })

  return (
    <ScreenLayout
      image="TicketBackgound.png"
      showTimer={true}
      timerInitialTime={30}
    >
      <div className="flex flex-col justify-center items-center gap-11 z-10 h-screen select-none">
        <Ticket />
      </div>
    </ScreenLayout>
  )
}

export default TicketView
