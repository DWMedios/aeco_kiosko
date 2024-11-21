// src/hooks/useWebSocket.ts
import { useCallback, useEffect, useState } from 'react'
import { WebSocketHook } from '../interfaces'

const useWebSocket = (): WebSocketHook => {
  const wsUrl = import.meta.env.VITE_WS_URL
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [message, setMessage] = useState<string>('')
  const [socketOn, setSocketOn] =useState<boolean>(false)

  useEffect(() => {
    const ws = new WebSocket(wsUrl)

    ws.onopen = () => {
      console.log('WebSocket conectado')
      setSocketOn(true)
    }
    
    ws.onmessage = (event) => {
      setMessage(event.data)
    }
    
    ws.onclose = () => {
      console.log('WebSocket desconectado')
      setSocketOn(false)
    }

    setSocket(ws)

    return () => {
      ws.close()
    }
  }, [message])

  const sendMessage = useCallback(
    (message: string) => {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ command: message }))
      }
    },
    [socket],
  )

  return { message, sendMessage, socketOn}
}

export default useWebSocket
