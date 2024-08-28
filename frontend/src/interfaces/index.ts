type method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface WebSocketHook {
  message: string;
  sendMessage: (message: string) => void;
}

export interface ApiParams {
  url: string;
  method?: method;
  headers?: Record<string, string>;
  body?: object;
}

export interface Icon {
  icon?: "offline" | "loading";
}

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

export interface BackButtoninterface {
  bgColor?: string | null;
  url: string;
  imageSrc?: string;
}

export interface CardRewardinterface {
  bgColor?: string | null;
  url: string;
  imageSrc?: string;
  label: string;
}

export interface SocialMedia {
  name: string;
  icon: JSX.Element;
}

export interface MediasProps {
  socialMedias: SocialMedia[];
}

export interface Container {
  name: string;
  icon: string;
}

export interface ContainersConditions {
  container: Container;
  conditions: string[];
}

export interface ArrayContainersConditions {
  containers: ContainersConditions[];
}
