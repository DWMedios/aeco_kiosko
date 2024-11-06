import { useState } from 'react'

const SendMessage = () => {
    const api_ws = import.meta.env.VITE_API_BASE_URL
    const protocol_ws = import.meta.env.VITE_USE_PROTOCOL

    const { message, sendMessage } = useWebSocket(`${protocol_ws}://${api_ws}`)
    const [input, setInput] = useState < string > ('OPEN_CLOSE_COVER_S')

    const handleSendMessage = () => {
        console.log('🚀 ~ handleSendMessage ~ input:', input)
        sendMessage(JSON.stringify({ command: input }))
        setInput('OPEN_CLOSE_COVER_S')
    }

    return (
        <div>
            <h1>Cliente WebSocket</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe un mensaje"
            />
            <button onClick={handleSendMessage}>Enviar</button>
            <div>
                <h2>Mensaje del servidor:</h2>
                {/* <pre>{message}</pre> */}
            </div>
        </div>
    )
}

export default SendMessage
