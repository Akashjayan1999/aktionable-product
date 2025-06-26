import { notFound } from "next/navigation";
import ChatPageContainer from "./components/ChatPageContainer";
import { ChatProvider } from "./context/ChatContext";

const chatModules: Record<string, { type: string; displayName: string }> = {
  "ai-lawyer": {
    type: "ai-lawyer",
    displayName: "AI Lawyer",
  },
  "actionable-bot": {
    type: "actionable-bot",
    displayName: "Actionable Bot",
  },
};

export default async function Page({ params }: { params: Promise<{ modules: string; chat: string }> }) {
  const { chat } = await params;
  const chatConfig = chatModules[chat as keyof typeof chatModules];
  if (!chatConfig) {
    return notFound();
  }
  return (
    <ChatProvider>
      <ChatPageContainer chatConfig={chatConfig} />
    </ChatProvider>
  );
} 