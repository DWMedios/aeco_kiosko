// src/hooks/useWebSocket.ts
import { useCallback, useEffect, useState } from "react";
import { WebSocketHook } from "../interfaces";

const useWebSocket = (url: string): WebSocketHook => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => {
      console.log("WebSocket conectado");
    };

    ws.onmessage = (event) => {
      setMessage(JSON.parse(event.data).message);
      console.log("Mensaje recibido del servidor:", JSON.parse(event.data).message);
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
