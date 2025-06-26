'use client';

import { usePathname, useRouter } from 'next/navigation';
import { createContext, useContext, useState, ReactNode } from 'react';

// Define a basic message type, you can adjust this to your needs
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

interface ChatContextType {
  isConfigured: boolean;
  setIsConfigured: (isConfigured: boolean) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  startNewChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [isConfigured, setIsConfigured] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  const startNewChat = () => {
    setIsConfigured(false);
    setMessages([]);
    
    router.push(pathname);
  };

  const value = {
    isConfigured,
    setIsConfigured,
    messages,
    setMessages,
    startNewChat,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}; 