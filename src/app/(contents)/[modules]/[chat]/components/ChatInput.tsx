'use client';

import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import Image from 'next/image';

const ChatInput = () => {
  return (
    <div className="p-4">
      <div className="relative">
        <Textarea
          placeholder="Enter your query"
          className="min-h-[60px] pr-12 resize-none bg-white font-normal font-varela-round text-lg text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-[#009588] active:border-amber-50 focus:border-transparent rounded-lg shadow-none"
        />
        <Button
          type="submit"
          size="icon"
          className="absolute bottom-2 right-4 hover:bg-white cursor-pointer"
          variant="ghost"
        >
          <Image
            src="/send.svg"
            alt="send icon"
            width={24}
            height={24}
            className="h-10 w-10"
          />
          
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
