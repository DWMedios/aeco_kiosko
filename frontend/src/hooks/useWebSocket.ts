import { useCallback, useEffect, useState } from 'react'
import { MessageWebSocket, WebSocketHook } from '../interfaces'

let socket: WebSocket | null = null;

const useWebSocket = (): WebSocketHook => {
  const wsUrl = import.meta.env.VITE_API_WS
  // const [socket, setSocket] = useState<WebSocket | null>(null)
  const [command, setCommand] = useState<MessageWebSocket>({})
  const [socketOn, setSocketOn] =useState<boolean>(false)
  
  useEffect(() => {
    if (!socket && !socketOn) {
      socket = new WebSocket(wsUrl);
    }

    const ws = socket;

    if(ws && !socketOn)
      ws.onopen = () => {
        console.log('WebSocket conectado');
        setSocketOn(true);
      };
    
    if(ws)
      ws.onmessage = (event) => {
        const data: MessageWebSocket = JSON.parse(event.data);
        setCommand(data);
      }
    
    // ws.onclose = () => {
    //   console.log('WebSocket desconectado')
    //   setSocketOn(false)
    // }

    // setSocket(ws)

    // return () => {
    //   ws.close()
    // }
  }, [command])

  const sendCommand = useCallback(
    (message: string) => {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ command: message }))
      }
    },
    [],
  )

  return { command, sendCommand, socketOn}
}

export default useWebSocket
