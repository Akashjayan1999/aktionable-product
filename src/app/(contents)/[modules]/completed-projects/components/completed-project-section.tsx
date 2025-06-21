"use client";

import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
export interface Project {
  name: string;
  createdAt: string;
  status: "Not Deployed" | "Success" | "Failed";
  completed?: boolean;
}

interface CompletedProjectSection {
  title: string;
  description: string;
  notes: string;
  completedProjects: Project[];
}

export const CompletedProjectSection = ({
  title,
  description,
  notes,
  completedProjects
}: CompletedProjectSection) => {
  const [isCompletedTab, setIsCompletedTab] = useState(false);
  const handleTabChange = (tab: "inProgress" | "completed") => {
    setIsCompletedTab(tab === "completed");
  };
  const projects = completedProjects;
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
      <p className="text-xl  text-[#000] mb-4">
        {description}
      </p>
      <div className="flex justify-between items-center">
        <div className="mb-12 text-base text-[#424242]">
            {notes}
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
