import { useCallback, useEffect, useRef, useState } from 'react'
import { MessageWebSocket, WebSocketHook } from '../interfaces'

const RECONNECT_TIMEOUT = 3000

const useWebSocket = (): WebSocketHook => {
  const wsUrl = import.meta.env.VITE_API_WS
  const [command, setCommand] = useState<MessageWebSocket>({})
  const [socketOn, setSocketOn] = useState<boolean>(false)
  const socketRef = useRef<WebSocket | null>(null)
  const reconnectTimeoutRef = useRef<number>()

  const connect = useCallback(() => {
    if (socketRef.current?.readyState === WebSocket.OPEN) return

    const ws = new WebSocket(wsUrl)

    ws.onopen = () => {
      console.log('WebSocket conectado')
      setSocketOn(true)
      // Clear any pending reconnection timeout
      if (reconnectTimeoutRef.current) {
        window.clearTimeout(reconnectTimeoutRef.current)
        reconnectTimeoutRef.current = undefined
      }
    }

    ws.onmessage = (event) => {
      try {
        const data: MessageWebSocket = JSON.parse(event.data)
        setCommand(data)
      } catch (error) {
        console.error('Error parsing WebSocket message:', error)
      }
    }

    ws.onclose = () => {
      console.log('WebSocket desconectado')
      setSocketOn(false)
      socketRef.current = null

      // Attempt to reconnect
      reconnectTimeoutRef.current = window.setTimeout(() => {
        console.log('Intentando reconexión...')
        connect()
      }, RECONNECT_TIMEOUT)
    }

    ws.onerror = (error) => {
      console.error('WebSocket error:', error)
    }

    socketRef.current = ws
  }, [wsUrl])

  useEffect(() => {
    connect()

    return () => {
      if (reconnectTimeoutRef.current) {
        window.clearTimeout(reconnectTimeoutRef.current)
      }
      if (socketRef.current) {
        socketRef.current.close()
        socketRef.current = null
      }
    }
  }, [connect])

  const sendCommand = useCallback((message: string) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ command: message }))
    } else {
      console.warn('WebSocket no está conectado. El mensaje no se enviará.')
    }
  }, [])

  return { command, sendCommand, socketOn }
}

export default useWebSocket
