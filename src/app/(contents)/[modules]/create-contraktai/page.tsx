import { notFound } from "next/navigation";
import { CreateContraktaiSection } from "./components/create-contraktai-section";
interface CreateProjectsTypes {
  title: string;
}


const CreateprojectModules: Record<string, CreateProjectsTypes> = {
  contraktai: {
    title: "Review Documents",
    
  }
};

interface Props {
  params: {
    modules: string;
  };
 
}

export default async function CreateProjectPage({ params  }: Props) {
  const { modules } = await params;
  const data = CreateprojectModules[modules as keyof typeof CreateprojectModules];

  if (!data) return notFound();
  
  return (
    <>
    <CreateContraktaiSection title={data.title} />
    </>
  );
}