import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
