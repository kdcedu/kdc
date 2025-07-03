
"use client"
import { message } from "antd";
import { createContext, useContext } from "react";

interface GlobalMessageContextType {
    createSuccessMessage: (message: string) => void;
    createErrorMessage: (message: string) => void;
}

export const GlobalMessageContext = createContext<GlobalMessageContextType | undefined>(undefined);

export const GlobalMessageProvider = ({ children }: { children: React.ReactNode }) => {
    const [messageApi, contextHolder] = message.useMessage();

    const createSuccessMessage = (message: string) => {
        messageApi.success(message);
    }

    const createErrorMessage = (message: string) => {
        messageApi.error(message);
    }

    return (
        <GlobalMessageContext.Provider value={{ createSuccessMessage, createErrorMessage }}>
            {children}
            {contextHolder}
        </GlobalMessageContext.Provider>
    );
};

export const useGlobalMessage = () => {
  const context = useContext(GlobalMessageContext);
  if (!context) throw new Error("useGlobalMessage must be used within GlobalMessageProvider");
  return context;
};
