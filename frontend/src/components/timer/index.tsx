import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TimerProps } from '../../interfaces'
import useWebSocket from '../../hooks/useWebSocket'
import { sendCommands } from '../../utils/commands'
import { ClearCountPackings } from '../../utils/savePackaging'

const Timer = ({
  initialTime,
  className,
  onEnd,
}: TimerProps) => {
  const { sendCommand } = useWebSocket()
  const [timeLeft, setTimeLeft] = useState(initialTime)

  const navigate = useNavigate()

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onEnd) onEnd()
      sendCommand(sendCommands.INITIAL_SETUP_LOCK_ALL)
      sessionStorage.clear()
      console.log("🚀 ~ useEffect ~ ClearCountPackings():")
      navigate('/home')
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, navigate, onEnd])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  return (
    <div
      className={`absolute top-20 right-20 text-center text-white bg-green-700 p-3 rounded-xl w-48 shadow-2xl tracking-wider ${className}`}
    >
      <p className="text-5xl font-bold">{formatTime(timeLeft)}</p>
    </div>
  )
}

export default Timer
