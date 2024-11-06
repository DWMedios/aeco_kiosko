import { useEffect, useState } from 'react'
import useWebSocket from '../hooks/useWebSocket'

const SendMessage = () => {
  const api_ws = import.meta.env.VITE_API_BASE_URL
  const [mesages, SetMesages] = useState<Array<string>>([])
  const { message, sendMessage } = useWebSocket(api_ws) // Cambia la URL según tu configuración
  const [input, setInput] = useState<string>('')

  const handleSendMessage = () => {
    SetMesages([...mesages, `Mensaje enviado: ${input}`])
    sendMessage(input)
    setInput('')
  }

  useEffect(() => {
    if (message) SetMesages([...mesages, `Mensaje recibido: ${message}`])
  }, [message])

  return (
    <div>
      <h1>Cliente WebSocket</h1>
      <input
        style={{ border: '1px red solid', margin: 10 }}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe un mensaje"
      />
      <button onClick={handleSendMessage}>Enviar</button>
      <div>
        <h2>Mensaje del servidor:</h2>
        {mesages.map((m) => {
          return (
            <pre
              style={{ color: `${m.includes('recibido') ? 'red' : 'black'}` }}
            >
              {m}
            </pre>
          )
        })}
      </div>
    </div>
  )
}

export default SendMessage
