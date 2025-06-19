
import { ModuleSection  } from "./components/module";

import { notFound } from "next/navigation";
export default async function Page({
  params,
}: {
  params: Promise<{ modules: string }>
}) {
  const modulesData = {
  contraktai: {
    title: "Contrakt AI – Intelligent Legal Automation",
    description: `Contrakt AI speeds up legal workflows by intelligently analyzing contracts and documents. It leverages legal AI and natural language processing to review clauses, flag risks, and ensure compliance with regulatory or policy requirements. Legal teams can automatically extract key information from agreements, compare terms against standards, and even generate first-draft contracts. By automating routine review work, Contrakt AI frees your lawyers to focus on strategic counsel while reducing errors and turnaround time.`,
    imageUrl: "/contractAI.svg",
    buttonText: "Create a Contrakt AI",
    buttonLink: "/create/contraktai",
    guideLink: "https://example.com/how-to-guide",
  },
  adoptiq: { 
    title: "AdoptIQ – Digital Adoption Analytics & Automation",
    description: `AdoptIQ helps you maximize ROI on your software investments through advanced digital adoption analytics and in-app automation. It tracks user behavior to identify training gaps, feature adoption, and workflow inefficiencies. With real-time insights, you can optimize user experiences, automate repetitive tasks, and ensure your teams are getting the most out of your software tools.`,
    imageUrl: "/images/adoptiq.png",
    buttonText: "Create an AdoptIQ",
    buttonLink: "/create/adoptiq",
    guideLink: "https://example.com/how-to-guide",
  },
  medusaai: {
    title: "MedUSA AI – Healthcare Claims & RCM Automation",
    description: `MedUSA AI transforms healthcare administration by automating claims processing and revenue cycle management. It uses AI to analyze patient records, insurance policies, and billing codes to streamline claims submissions, reduce denials, and accelerate reimbursements. By automating these complex workflows, MedUSA AI helps healthcare providers focus on patient care while improving financial performance.`,
    imageUrl: "/images/medusaai.png",
    buttonText: "Create a MedUSA AI",
    buttonLink: "/create/medusaai",
    guideLink: "https://example.com/how-to-guide",
   },
};
  const { modules } = await params
  const module = modulesData[modules as keyof typeof modulesData];
  if (!module){
    return notFound();
}
  return (
    <div className="">
      <ModuleSection  {...module} />
    </div>
  );
}