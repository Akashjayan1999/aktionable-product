import TitleWithBackButton from "@/components/title-with-backbutton";
import ContraktaiForm from "./contrakai-form";



interface CreateContraktaiSectionProps {
  title: string;
}

export const CreateContraktaiSection = ({
  title
}: CreateContraktaiSectionProps) => {



  return (
    <div className="py-12 px-0 relative mt-25 mx-5 md:mx-[48px] h-min-2">
       <TitleWithBackButton title={title} backHref="#" />
       <div className="bg-[rgba(205,218,234,0.2)] p-6 rounded-2xl">
       <ContraktaiForm />
       </div>
    </div>
  );
};