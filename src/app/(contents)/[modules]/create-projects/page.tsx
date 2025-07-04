import { notFound } from "next/navigation";
import {CreateProjectSection} from "./components/create-project-section";
interface CreateProjectsTypes {
  title: string;
}


const CreateprojectModules: Record<string, CreateProjectsTypes> = {
  adoptiq: {
    title: "Create Projects",
    
  }
};

interface Props {
  params: Promise<{ modules: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CreateProjectPage({ params,searchParams  }: Props) {
  const { modules } = await params;
  const searchParam = await searchParams;
  const data = CreateprojectModules[modules as keyof typeof CreateprojectModules];

  if (!data) return notFound();


  

  return (
    <>
    <CreateProjectSection title={data.title} searchParams={searchParam}/>
    </>
  );
}