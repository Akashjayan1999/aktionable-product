
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {RequestItem} from "./request-table";
import RequestTable from "./request-table";

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
      <div className="flex justify-between">
        <div className="font-varela-round text-3xl font-normal mb-6 bg-gradient-to-r from-[#009588] to-[#004487] bg-clip-text text-transparent">
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
      <div>
        <RequestTable
         subTitle={subTitle}
         RequestData={RequestData}
        
      />
      </div>
      
     
    </div>
  );
};