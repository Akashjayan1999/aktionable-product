import React from 'react';
import ChatInput from './ChatInput';

const ChatArea = () => {
  return (
    <div className="flex flex-col flex-1 min-h-[80vh] max-h-[80vh] m-4 bg-[#CDDAEA33] rounded-2xl">
      <div className="flex-1 flex items-center justify-center ">
        <div className="text-center max-w-md mx-auto">
          <h2 className="text-4xl font-normal font-varela-round bg-gradient-to-r from-[#009588]  to-[#004487] bg-clip-text text-transparent ">What can I help with?</h2>
        </div>
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatArea; 