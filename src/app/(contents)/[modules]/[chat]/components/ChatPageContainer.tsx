"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import AILawyerConfigForm from "./AILawyerConfigForm";
import ChatHeader from "./ChatHeader";
import { useToggle } from "@/app/hooks/use-toogle";

interface ChatPageContainerProps {
  chatConfig: {
    type: string;
    displayName: string;
  };
}

const ChatPageContainer: React.FC<ChatPageContainerProps> = ({ chatConfig }) => {
  const [isConfigured, setIsConfigured] = useState(false);
  
  const [isSidebarOpen, toggleSidebar] = useToggle(false);
  const isAILawyer = chatConfig.type === 'ai-lawyer';

  const handleConfigSubmit = () => {
    setIsConfigured(true);
  };

  const toogleSidebar = () => {
    toggleSidebar();
  };

  

  return (
    <div className="dark:text-white flex h-full bg-background text-foreground mt-25 mx-5 md:mx-[48px] relative">
      {/* Overlay for mobile when sidebar is open */}
      
      
      <Sidebar 
        chatType={chatConfig.type} 
        isOpen={isSidebarOpen}
        onClose={toogleSidebar}
      />
      
      <div className="flex-1 flex flex-col min-w-0  ">
        <ChatHeader title={chatConfig.displayName} toogleSidebar={toogleSidebar}/>
        <main className="flex-1 flex flex-col">
          {isAILawyer && !isConfigured ? (
            <AILawyerConfigForm onConfigSubmit={handleConfigSubmit} />
          ) : (
            <ChatArea />
          )}
        </main>
      </div>
    </div>
  );
};

export default ChatPageContainer; 