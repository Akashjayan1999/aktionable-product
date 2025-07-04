"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import Link from 'next/link';
import Image from 'next/image';
import { PanelRightOpen } from 'lucide-react';
interface ChatHeaderProps {
  toogleSidebar?: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({toogleSidebar }) => {
  return (
    <div className="flex items-center justify-between p-4  bg-background">
      <h1 className="text-xl font-semibold pt-2 visible md:invisible"><PanelRightOpen size={30} color='#a9bcd3' onClick={toogleSidebar} /></h1>
      <div className="flex items-center gap-2">
        <ModeToggle />
       
          <Link href="/" className="flex items-center gap-2">
            <Button
                        variant="link"
                        className="text-white hover:no-underline cursor-pointer bg-[#009588] rounded-3xl px-4 font-normal font-varela-round"
                      >
                        <Image
                          src="/arrow2.svg"
                          alt="arrow"
                          width={25}
                          height={20}
                          className="animate-pulse"
                        />{" "}
                        Back to website
                      </Button>
              
          </Link>
        
      </div>
    </div>
  );
};

export default ChatHeader; 