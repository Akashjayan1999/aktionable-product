import { CompletedProjectSection } from "./components/completed-project-section";
import type { Project } from "./components/completed-project-section";
import { notFound } from "next/navigation";

interface ModuleProjects {
  title: string;
  description: string;
  notes: string;
  completedProjects: Project[];
  
}

const CompletedProjects: Project[] = [
  {
    name: "Test Project",
    createdAt: "25-05-2025",
    status: "Failed",
    completed: true,
  },
  {
    name: "Test Project",
    createdAt: "25-05-2025",
    status: "Success",
    completed: true,
  },
  {
    name: "Test Project",
    createdAt: "25-05-2025",
    status: "Failed",
    completed: true,
  },
  {
    name: "Test Project",
    createdAt: "25-05-2025",
    status: "Failed",
    completed: true,
  },
  {
    name: "Test Project",
    createdAt: "25-05-2025",
    status: "Failed",
    completed: true,
  },
];

const projectModules: Record<string, ModuleProjects> = {
  contraktai: {
    title: "Your Projects",
    description:
      "Here are your documents, processed using our Contrakt AI models. You can view, edit, and add comments to them, subject to your permissions.",
    notes:
      "Note: If you’ve just created a document using our AI model, the first time you open the project, please go to the Edit section to review the generated content. Make any necessary changes and save the document. Once saved, it will be ready for viewing, downloading, and commenting.",
    completedProjects: CompletedProjects,
  },
};

interface Props {
  params: Promise<{ modules: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { modules } = await params;
  console.log("Module:", modules);
  const data = projectModules[modules as keyof typeof projectModules];

  if (!data) return notFound();


  const completedProjects = data.completedProjects;

  return (
    <CompletedProjectSection
      title={data.title}
      description={data.description}
      notes={data.notes}
      completedProjects={completedProjects}
    />
  );
}
