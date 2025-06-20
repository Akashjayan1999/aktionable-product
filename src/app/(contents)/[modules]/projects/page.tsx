import { ProjectSection } from "./components.tsx/project-section";
import type { Project } from "./components.tsx/project-section";
import { notFound } from "next/navigation";

interface ModuleProjects {
  title: string;
  description: string;
  inProgressProjects: Project[];
  completedProjects: Project[];
}

const contraktaiInProgress: Project[] = [
  { name: "Test Project", createdAt: "25-05-2025", status: "Not Deployed" },
  { name: "Test Project", createdAt: "25-05-2025", status: "Not Deployed" },
  { name: "Test Project", createdAt: "25-05-2025", status: "Not Deployed" },
  { name: "Test Project", createdAt: "25-05-2025", status: "Not Deployed" },
];

const contraktaiCompleted: Project[] = [
  { name: "Test Project", createdAt: "25-05-2025", status: "Failed", completed: true },
  { name: "Test Project", createdAt: "25-05-2025", status: "Success", completed: true },
  { name: "Test Project", createdAt: "25-05-2025", status: "Failed", completed: true },
  { name: "Test Project", createdAt: "25-05-2025", status: "Failed", completed: true },
  { name: "Test Project", createdAt: "25-05-2025", status: "Failed", completed: true },
];

const projectModules: Record<string, ModuleProjects> = {
  contraktai: {
    title: "Your Projects",
    description:
      "Contrakt AI is a powerful platform that helps businesses build applications that use large language models (LLMs). It provides a number of features that make it easy to develop and deploy LLM-based applications.",
    inProgressProjects: contraktaiInProgress,
    completedProjects: contraktaiCompleted,
  },
  adoptiq: {
    title: "Your Projects",
    description:
      "AdoptIQ is a powerful platform that helps businesses build applications that use large language models (LLMs). It provides a number of features that make it easy to develop and deploy LLM-based applications.",
    inProgressProjects: contraktaiInProgress,
    completedProjects: contraktaiCompleted,
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


  const inProgressProjects = data.inProgressProjects;
  const completedProjects = data.completedProjects; 

  return (
    <ProjectSection
      title={data.title}
      description={data.description}
      inProgressProjects={inProgressProjects}
      completedProjects={completedProjects}
    />
  );
}