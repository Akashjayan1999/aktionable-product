"use client";

import { ChatCard } from "@/components/chat-card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
export interface Chat {
  name: string;
  createdAt: string;
  description: string;
  type: string;
  visibility: string;
}

interface ChatsSectionProps {
  title: string;
  description: string;
  chats: Chat[];
}

export const ChatsSection = ({
  title,
  description,
  chats
}: ChatsSectionProps) => {

 return (
    <div className="py-12 px-0 relative mt-25 mx-5 md:mx-[48px]    h-min-2">
      <div className="flex justify-between">
        <div className="font-varela-round text-3xl font-normal mb-6 bg-gradient-to-r from-[#009588]  to-[#004487] bg-clip-text text-transparent">
          {title}
        </div>
        <div>
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
        </div>
      </div>
      <div className="bg-[#CDDAEA] rounded-2xl p-5 xl:p-10 mt-3 font-varela-round font-normal">
        <div className="flex justify-between items-start  ">
          <p className="text-xl  text-[#000]">{description}</p>

          <Image
            src="/swap-icon.svg"
            alt="Swap Icon"
            width={40}
            height={40}
            className=""
            loading="lazy"
          />
        </div>
        <div className="font-varela-round text-lg font-normal text-[#424242] mb-6">
          Note: By default, they may be in a stopped state. Start a chatbot to begin interacting.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-7 overflow-y-auto scrollbar-hide">
          {chats.map((chat, idx) => (
            <ChatCard key={idx} {...chat} />
          ))}
        </div>
      </div>
    </div>
  );
};
