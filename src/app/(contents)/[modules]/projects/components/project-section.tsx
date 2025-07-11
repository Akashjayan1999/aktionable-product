import { ProjectCard } from "@/components/project-card";
import TitleWithBackButton from "@/components/title-with-backbutton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export interface Project {
  name: string;
  createdAt: string;
  status: "Not Deployed" | "Success" | "Failed";
  completed?: boolean;
}

interface ProjectSectionProps {
  title: string;
  description: string;
  inProgressProjects: Project[];
  completedProjects: Project[];
  searchParams?: { [key: string]: string | string[] | undefined };
}

export const ProjectSection = ({
  title,
  description,
  inProgressProjects,
  completedProjects,
  searchParams
}: ProjectSectionProps) => {

  const currentTab = searchParams?.tab === "completed" ? "completed" : "inProgress";
  const isCompletedTab = currentTab === "completed";
  
  const projects = isCompletedTab ? completedProjects : inProgressProjects;

  return (
    <div className="py-12 px-0 relative mt-25 mx-5 md:mx-[48px] h-min-2">
       <TitleWithBackButton title={title} backHref="#" />
      
      <div className="bg-[rgba(205,218,234,0.2)] rounded-2xl p-5 xl:p-10 mt-3 font-varela-round font-normal">
        <p className="text-xl text-[#000] mb-4">
          {description}
        </p>
        
        <div className="flex justify-between items-start">
          <div className="flex gap-4 mb-6 flex-col md:flex-row">
            <Link href="?tab=inProgress" scroll={false}>
              <Button
                variant={isCompletedTab ? "outline" : "default"}
                className="rounded-3xl text-lg py-6 border-none"
              >
                In-Progress projects
              </Button>
            </Link>
            
            <Link href="?tab=completed" scroll={false}>
              <Button
                variant={!isCompletedTab ? "outline" : "default"}
                className="rounded-3xl text-lg py-6 border-none"
              >
                Completed projects
              </Button>
            </Link>
          </div>
          
          <Image
            src="/swap-icon.svg"
            alt="Swap Icon"
            width={40}
            height={40}
            className=""
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 overflow-y-auto scrollbar-hide">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};