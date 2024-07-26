// src/hooks/useWebSocket.ts
import { useCallback, useEffect, useState } from "react";

type WebSocketHook = {
  message: string;
  sendMessage: (message: string) => void;
};

const useWebSocket = (url: string): WebSocketHook => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => {
      console.log("WebSocket conectado");
    };

    ws.onmessage = (event) => {
      setMessage(event.data);
      console.log("Mensaje recibido del servidor:", event.data);
    };

    ws.onclose = () => {
      console.log("WebSocket desconectado");
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, [url]);

  const sendMessage = useCallback(
    (message: string) => {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(message);
      }
    },
    [socket]
  );

  return { message, sendMessage };
};

export default useWebSocket;
