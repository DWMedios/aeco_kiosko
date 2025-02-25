import { useEffect, useState } from 'react'
import useWebSocket from '../hooks/useWebSocket'
import { sendCommands } from '../utils/commands'

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
    if (command) SetMesages([...mesages, `Mensaje recibido: ${JSON.stringify(command)}`])
  }, [command])

  const commands = [
    sendCommands.INITIAL_SETUP_LOCK_ALL,
    sendCommands.INITIATE_BOTTLE_INSERT,
    sendCommands.END_THE_READING_PROCESS,
    sendCommands.FINISH_NO_READ_BOTTLE,
    sendCommands.CLAIM_DONATION_RETURN,
    sendCommands.ACCEPTED,
    sendCommands.REJECTED_BOTTLE,
    sendCommands.RED_LED,
    sendCommands.BLUE_LED,
    sendCommands.GREEN_LED,
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
