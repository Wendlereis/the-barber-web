import React, { createContext, useCallback, useContext, useState } from "react";
import { uuid } from "uuidv4";

import ToastContainer from "../components/ToastContainer";

interface ToastContextData  {
  addToast(message: Omit<ToastMessage, 'id'>): void
  removeToast(id: string): void
}

export interface ToastMessage {
  id: string
  type: 'success' | 'error' | 'info'
  title: string
  description: string
}

const ToastContext =  createContext<ToastContextData>({} as ToastContextData)

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([])

  const addToast = useCallback((message: Omit<ToastMessage, 'id'>) => {
    setMessages([...messages, { id: uuid(), ...message }])
  }, [messages])

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter((message) => message.id !== id));
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {!!messages.length && <ToastContainer messages={messages} />}
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  } 
    
  return context;
}