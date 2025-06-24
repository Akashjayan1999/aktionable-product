"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import AILawyerConfigForm from "./AILawyerConfigForm";
import ChatHeader from "./ChatHeader";

interface ChatPageContainerProps {
  chatConfig: {
    type: string;
    displayName: string;
  };
}

const ChatPageContainer: React.FC<ChatPageContainerProps> = ({ chatConfig }) => {
  const [isConfigured, setIsConfigured] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isAILawyer = chatConfig.type === 'ai-lawyer';

  const handleConfigSubmit = () => {
    setIsConfigured(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-full bg-background text-foreground mt-25 mx-5 md:mx-[48px] relative">
      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}
      
      <Sidebar 
        chatType={chatConfig.type} 
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />
      
      <div className="flex-1 flex flex-col min-w-0  ">
        <ChatHeader title={chatConfig.displayName} />
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