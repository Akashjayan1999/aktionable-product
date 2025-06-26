'use client';

import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useDeferredValue, useState } from 'react';
import { useChat } from '../context/ChatContext';

const ChatInput: React.FC = () => {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);
  const { messages, setMessages } = useChat();

  const handleSubmit = () => {
    if (text.trim()) {
      const userMessage = { id: Date.now().toString(), sender: 'user' as const, text:deferredText };
      const newMessages = [...messages, userMessage];
      setMessages(newMessages);

     
      setTimeout(() => {
        const botMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'ai' as const,
          text: `Bot: ${deferredText}`,
        };
        setMessages([...newMessages, botMessage]);
      }, 500);

      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="p-4  ">
      <div className="relative">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter your query"
          className="h-[60px] pr-12 resize-none bg-white text-black font-varela-round text-lg placeholder:text-gray-400 focus:ring-2 focus:ring-[#009588] rounded-lg shadow-none dark:bg-white"
        />
        <Button
          type="button"
          size="icon"
          onClick={handleSubmit}
          className="absolute bottom-2 right-4 hover:bg-white cursor-pointer"
          variant="ghost"
        >
          <Image src="/send.svg" alt="send icon" width={24} height={24} className="h-10 w-10" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
