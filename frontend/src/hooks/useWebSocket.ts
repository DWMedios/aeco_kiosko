// src/hooks/useWebSocket.ts
import { useCallback, useEffect, useState } from 'react'
import { WebSocketHook } from '../interfaces'

const useWebSocket = (url: string): WebSocketHook => {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [message, setMessage] = useState<string>('')
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    const ws = new WebSocket(url)

    ws.onopen = () => {
      console.log('WebSocket conectado')
    }

    ws.onmessage = (event) => {
      setMessage(event.data)
    }

    ws.onclose = () => {
      console.log('WebSocket desconectado')
    }

    setSocket(ws)

    return () => {
      ws.close()
    }
  }, [url, message])

  const sendMessage = useCallback(
    (message: string) => {
      setCount(count + 1)
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ command: message }))
      }
    },
    [socket],
  )

  return { message, sendMessage }
}

export default useWebSocket
