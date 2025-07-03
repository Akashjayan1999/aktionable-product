import { notFound } from "next/navigation";
import { CreateContraktaiSection } from "./components/create-contraktai-section";
interface CreateContraktAiProjectsTypes {
  title: string;
}


const CreateContraktAiProjectModules: Record<string, CreateContraktAiProjectsTypes> = {
  contraktai: {
    title: "Review Documents",
    
  }
};

interface Props {
  params: {
    modules: string;
  };
 
}

export default async function CreateContraktAiProjectPage({ params  }: Props) {
  const { modules } = await params;
  const data = CreateContraktAiProjectModules[modules as keyof typeof CreateContraktAiProjectModules];

  if (!data) return notFound();
  
  return (
    <>
    <CreateContraktaiSection title={data.title} />
    </>
  );
}