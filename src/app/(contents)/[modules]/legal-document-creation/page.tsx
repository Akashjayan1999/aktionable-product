import { notFound } from "next/navigation";
import { LegalDocumentCreationSection } from "./components/legal-document-section";
interface legalDocumentCreationTypes {
  title: string;
}


const legalDocumentCreationModules: Record<string, legalDocumentCreationTypes> = {
  contraktai: {
    title: "Legal Document Creation",
    
  }
};

interface Props {
  params: {
    modules: string;
  };
 
}

export default async function legalDocumentCreationPage({ params  }: Props) {
  const { modules } = await params;
  const data = legalDocumentCreationModules[modules as keyof typeof legalDocumentCreationModules];

  if (!data) return notFound();
  
  return (
    <>
    <LegalDocumentCreationSection title={data.title} />
    </>
  );
}