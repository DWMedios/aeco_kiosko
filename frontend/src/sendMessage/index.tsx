import { useState } from "react";
import useWebSocket from "../hooks/useWebSocket";

const SendMessage = () => {
  const api_ws = import.meta.env.VITE_API_BASE_URL;

  const { message, sendMessage } = useWebSocket(api_ws); // Cambia la URL según tu configuración
  const [input, setInput] = useState<string>("");

  const handleSendMessage = () => {
    sendMessage(input);
    setInput("");
  };

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
        <pre>{message}</pre>
      </div>
    </div>
  );
};

export default SendMessage;
