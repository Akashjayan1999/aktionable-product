import TitleWithBackButton from "@/components/title-with-backbutton";
import LegalDocumentForm from "./legal-document-form";



interface LegalDocumentCreationSectionProps {
  title: string;
}

export const LegalDocumentCreationSection = ({
  title
}: LegalDocumentCreationSectionProps) => {



  return (
    <div className="py-12 px-0 relative mt-25 mx-5 md:mx-[48px] h-min-2">
       <TitleWithBackButton title={title} backHref="#" />
       <div className="bg-[rgba(205,218,234,0.2)] p-6 rounded-2xl">
        <LegalDocumentForm />
       </div>
    </div>
  );
};