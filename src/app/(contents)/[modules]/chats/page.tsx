import { ChatsSection } from "./components/chats-section";
import type { Chat } from "./components/chats-section";
import { notFound } from "next/navigation";

interface ModuleProjects {
  title: string;
  description: string;
  chats: Chat[];
}

const chats: Chat[] = [
    {name: "Test Project", createdAt: "02-06-2025", description: "Test", type: "Bot", visibility: "Organizational" },
    { name: "Test Project", createdAt: "02-06-2025", description: "Test", type: "Bot", visibility: "Organizational" },
    { name: "Test Project", createdAt: "02-06-2025", description: "Test", type: "Bot", visibility: "Organizational" },
    { name: "Test Project", createdAt: "02-06-2025", description: "Test", type: "Bot", visibility: "Organizational" },
];


const projectModules: Record<string, ModuleProjects> = {
  adoptiq: {
    title: "Your Chats",
    description:
      "Here are your customized chatbots, configured and processed using our Gen AI models. You can manage them as needed.",
    chats: chats,
  
  }
};

interface Props {
  params: {
    modules: string;
  };
}

export default async function ProjectPage({ params }: Props) {
  const { modules } = params;
  console.log("Module:", modules);
  const data = projectModules[modules as keyof typeof projectModules];

  if (!data) return notFound();


  const chats = data.chats;


  return (
    <ChatsSection
      title={data.title}
      description={data.description}
      chats={chats}
    />
  );
}