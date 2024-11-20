import { useEffect, useState } from 'react'
import useWebSocket from '../hooks/useWebSocket'

const SendMessage = () => {
  const api_ws = import.meta.env.VITE_WS_URL
  const [mesages, SetMesages] = useState<Array<string>>([])
  const { message, sendMessage } = useWebSocket(api_ws) // Cambia la URL según tu configuración
  const [input, setInput] = useState<string>('')

  const commands = ['YLWDY', 'BEBJ', 'CYLILEYLD', 'XYYLIYLEYLDVBEB', 'YLIYLEYL', 'BUS', 'US', 'T', 'U', 'L']

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
      <hr />
      {commands.map((command) => {
        return (
          <button style={{ margin: 4, border: '1px blue solid', padding: 4 }} onClick={() => sendMessage(command)}>
            {command}
          </button>
        )
      })}
      <div>
        <h2>Mensaje del servidor:</h2>
        <pre style={{ color: 'red' }}>{message}</pre>
        ============================================
        {mesages.map((m, i) => {
          return (
            <pre
              key={i}
              style={{ color: `${m.includes('recibido') ? 'red' : 'black'}` }}
            >
              {i + 1}.- {m}
            </pre>
          )
        })}
      </div>
    </div>
  )
}

export default SendMessage
