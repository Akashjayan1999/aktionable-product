'use client';

import React from 'react';
import ChatInput from './ChatInput';
import { useChat } from '../context/ChatContext';

const ChatArea = () => {
  const { messages } = useChat();

  return (
    <div className="flex flex-col flex-1 min-h-[80vh] max-h-[80vh] m-4 bg-[#CDDAEA33] rounded-2xl overflow-hidden">
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <h2 className="text-4xl font-normal font-varela-round bg-gradient-to-r from-[#009588] to-[#004487] bg-clip-text text-transparent">
              What can I help with?
            </h2>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`rounded-lg px-4 py-2 max-w-[70%] text-base font-varela-round ${
                msg.sender === 'user'
                  ? 'ml-auto bg-[#009588] text-white'
                  : 'mr-auto bg-white text-black'
              }`}
            >
              {msg.text}
            </div>
          ))
        )}
      </div>

      <ChatInput />
    </div>
  );
};

export default ChatArea;
