type method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export type WebSocketHook = {
  message: string;
  sendMessage: (message: string) => void;
};

export interface ApiParams {
  url: string;
  method?: method;
  headers?: Record<string, string>;
  body?: object;
}
