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

export type Icon = {
  icon?: "offline" | "loading";
};

export interface Url {
  url: string;
}

export interface Layout {
  children: React.ReactNode;
  image: string;
}

export interface Buttoninterface {
  bgColor?: string | null;
  borderRadius?: "full" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  label: string;
  borderColor?: string | null;
  textColor?: string | null;
  url: string;
}
