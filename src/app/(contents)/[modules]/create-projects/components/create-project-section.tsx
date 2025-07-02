import TitleWithBackButton from "@/components/title-with-backbutton";
import StepIndicator from "./step-indicator";
import CreateProjectFormFields from "./create-project-form";



interface CreateProjectsSectionProps {
  title: string;
  searchParams?: { [key: string]: string | string[] | undefined };
}
const steps = ["Create project", "Add Dataset", "Setting", "Test and Deploy"]
export const CreateProjectSection = ({
  title,
  searchParams
}: CreateProjectsSectionProps) => {

const activeStep =  parseInt(Array.isArray(searchParams?.step) ? searchParams.step[0] : searchParams?.step || "0")

  return (
    <div className="py-12 px-0 relative mt-25 mx-5 md:mx-[48px] h-min-2">
       <TitleWithBackButton title={title} backHref="#" />
       <div className="mt-2">
       <StepIndicator steps={steps} activeStep={activeStep} />
       </div>
       <div className="mt-6">
       {activeStep === 0 && <CreateProjectFormFields />}
       {activeStep === 1 && <CreateProjectFormFields />}
       {activeStep === 2 && <CreateProjectFormFields />}
       {activeStep === 3 && <CreateProjectFormFields />}
       </div>
    </div>
  );
};