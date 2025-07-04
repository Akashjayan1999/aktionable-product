import {RequestItem} from "./request-table";
import RequestTable from "./request-table";
import TitleWithBackButton from "@/components/title-with-backbutton";

interface RequestSectionProps {
  title: string;
  subTitle: string;
  RequestData: RequestItem[]
}

export const RequestSection = ({
  title,
  subTitle,
  RequestData
}: RequestSectionProps) => {

  

  return (
    <div className="py-12 px-0 relative mt-25 mx-5 md:mx-[48px] h-min-2">
       <TitleWithBackButton title={title} backHref="#" />
      <div>
        <RequestTable
         subTitle={subTitle}
         RequestData={RequestData}
        
      />
      </div>
      
     
    </div>
  );
};