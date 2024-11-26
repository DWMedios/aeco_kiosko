import { useEffect, useState } from 'react'
import useWebSocket from '../hooks/useWebSocket'

const SendMessage = () => {
  const [mesages, SetMesages] = useState<Array<string>>([])
  const [input, setInput] = useState<string>('')

  const { command, sendCommand } = useWebSocket()
  
  const handleSendMessage = () => {
    SetMesages([...mesages, `Mensaje enviado: ${input}`])
    sendCommand(input)
    setInput('')
  }
  
  useEffect(() => {
    if (command) SetMesages([...mesages, `Mensaje recibido: ${command}`])
  }, [command])

  const commands = [
    'YLWDY',
    'BEBJ',
    'CYLILEYLD',
    'XYYLIYLEYLDV',
    'YLIYLEYL',
    'BUS',
    'US',
    'T',
    'U',
    'L',
  ]

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
          <button
            style={{ margin: 4, border: '1px blue solid', padding: 4 }}
            onClick={() => sendCommand(command)}
          >
            {command}
          </button>
        )
      })}
      <div>
        <h2>Mensaje del servidor:</h2>
        <pre style={{ color: 'red' }}>{ JSON.stringify(command) }</pre>
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
