import { RequestSection } from "./components/request-section";
import { notFound } from "next/navigation";
import {RequestItem} from "./components/request-table";

interface ModuleRequests{
  title: string;
  subTitle: string;
  RequestData: RequestItem[]
}
const pendingRequests = [
    {
      projectName: "Test Project for xyz",
      requestedUser: "xyz",
      requests: "01",
    },
  ]

const projectModules: Record<string, ModuleRequests> = {
  contraktai: {
    title: "My Requests",
    subTitle: "Pending Requests",
    RequestData: pendingRequests
    },
};

interface Props {
  params: {
    modules: string;
  };
}

export default async function ProjectPage({ params}: Props) {
  const { modules } = await params;
  
  console.log("Module:", modules);
  const data = projectModules[modules as keyof typeof projectModules];

  if (!data) return notFound();


 

  return (
    <RequestSection
      title={data.title}
      subTitle={data.subTitle}
      RequestData={data.RequestData}
    />
  );
}