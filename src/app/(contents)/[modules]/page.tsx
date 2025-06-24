import { ModuleSection } from "./components/module";

import { notFound } from "next/navigation";



export default async function Page({
  params,
}: {
  params: Promise<{ modules: string }>;
}) {
  const modulesData = {
    contraktai: {
      title: "Contrakt AI – Intelligent Legal Automation",
      description: `Contrakt AI speeds up legal workflows by intelligently analyzing contracts and documents. It leverages legal AI and natural language processing to review clauses, flag risks, and ensure compliance with regulatory or policy requirements. Legal teams can automatically extract key information from agreements, compare terms against standards, and even generate first-draft contracts. By automating routine review work, Contrakt AI frees your lawyers to focus on strategic counsel while reducing errors and turnaround time.`,
      imageUrl: "/contractAI.svg",
      buttonText: "Create a Contrakt AI",
      buttonLink: "/create/contraktai",
      guideLink: "/how-to-guide",
      summary:
        "Get summary quickly, identify important terms, and analyse your legal documents.",
    },
    adoptiq: {
      title: "AdoptIQ – Digital Adoption Analytics & Automation",
      description: `AdoptIQ helps you maximize ROI on your software investments through advanced digital adoption analytics and in-app automation. It monitors user engagement across your organization’s tools, identifying adoption rates and pain points in real time. With these insights, you can deploy in-app guidance or automated triggers to assist users exactly when they need help. This ensures every employee fully adopts new tools and processes. AdoptIQ’s analytics also inform training and change management strategies, so you can continuously improve productivity and technology ROI.`,
      imageUrl: "/adoptiq.svg",
      buttonText: "Create an AdoptIQ",
      buttonLink: "/create/adoptiq",
      guideLink: "/how-to-guide",
      summary:
        "Quickly build and deploy AdoptIQ without coding.",
    },
    medusaai: {
      title: "MedUSA AI – Healthcare Claims & RCM Automation",
      description: `MedUSA AI transforms healthcare administration by automating claims processing and revenue cycle management. It uses AI to analyze patient records, insurance policies, and billing codes to streamline claims submissions, reduce denials, and accelerate reimbursements. By automating these complex workflows, MedUSA AI helps healthcare providers focus on patient care while improving financial performance.`,
      imageUrl: "/images/medusaai.png",
      buttonText: "Create a MedUSA AI",
      buttonLink: "/create/medusaai",
      guideLink: "/how-to-guide",
      summary:
        "Get summary quickly, identify important terms, and analyse your legal documents.",
    },
  };
  console.log("sd",await params)
  const { modules } = await params;
  const selectedModule = modulesData[modules as keyof typeof modulesData];
  console.log("Selected module:", selectedModule);
  console.log("Modules:", modules);
  if (!selectedModule) {
    console.log("mo not found");
    return notFound();
  }
  return (
    <div className="">
      <ModuleSection {...selectedModule} />
    </div>
  );
}
