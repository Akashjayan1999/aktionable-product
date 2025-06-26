'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useChat } from '../context/ChatContext';

interface SidebarProps {
  chatType: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const chatConfig: Record<
  string,
  { buttonText: string; conversations: { id: string; title: string }[] }
> = {
  'ai-lawyer': {
    buttonText: 'New Lawyer',
    conversations: [
      { id: '1', title: 'Contract AI Lawyer' },
      { id: '2', title: 'Contract AI Lawyer' },
      { id: '3', title: 'Contract AI Lawyer' },
      { id: '4', title: 'Contract AI Lawyer' },
      { id: '5', title: 'Contract AI Lawyer' },
    ],
  },
  default: {
    buttonText: 'New Conversation',
    conversations: [
      { id: '1', title: 'Ecommerce Customer e-commerce customer' },
      { id: '2', title: 'Corporate Governance AI Lawyer ' },
      { id: '3', title: 'Ecommerce Governance' },
    ],
  },
};

const Sidebar = ({ chatType, isOpen = true, onClose }: SidebarProps) => {
  const { buttonText, conversations } =
    chatConfig[chatType] ?? chatConfig.default;
  const { startNewChat } = useChat();

  return (
    <aside
      className={cn(
        'absolute z-5 inset-y-0 w-full md:w-[300px]  bg-background transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0',
        isOpen ? 'translate-x-0' : '-translate-x-[100vw]'
      )}
    >
      <div className="flex flex-col h-[90vh] sidebar-item">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-norml font-varela-round pt-[23px] mx-auto dark:bg-gradient-to-r dark:from-[#fff] dark:to-[#fff] bg-gradient-to-r from-[#009588] to-[#004487] bg-clip-text text-transparent flex items-end">
            Your Chatbot Here !
          </h2>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onClose}
          >
            ✕
          </Button>
        </div>
        <div className="flex flex-col h-full mt-6 mb-1 bg-[#CDDAEA33] rounded-2xl p-5">
          <Button
            className="mb-4 text-base py-5 font-norml font-varela-round dark:bg-gradient-to-r dark:from-[#fff] dark:to-[#fff] bg-gradient-to-r from-[#009588] to-[#004487] dark:text-black"
            onClick={startNewChat}
          >
            {buttonText}
          </Button>
          <div className="flex-grow space-y-1 overflow-y-auto">
            {conversations.map((conv) => (
              <Link
                key={conv.id}
                href={`?chatid=${conv.id}`}
                scroll={false}
                className="block p-2 rounded-md hover:bg-muted cursor-pointer"
              >
                <p className="text-sm font-norml font-varela-round truncate">
                  {conv.title}
                </p>
              </Link>
            ))}
          </div>
          <Button
            variant="blueSolid"
            className="dark:bg-gradient-to-r dark:from-[#fff] dark:to-[#fff] dark:text-black"
          >
            Export Chat
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
