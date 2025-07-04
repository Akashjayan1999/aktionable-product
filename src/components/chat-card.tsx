import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Trash2,
  
 
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

interface ChatProps {
  id:number;
  name: string;
  createdAt: string;
  description: string;
  type: string;
  visibility: string;
}

export const ChatCard = ({
  id,
  name,
  createdAt,
  description,
  type,
  visibility,
}: ChatProps) => {
  return (
    <Card className="w-full shadow-none rounded-3xl px-4 h-full relative">
      <CardHeader className="flex justify-between">
        <div className="w-full md:w-[75%] ">
          <h3 className="text-3xl bg-gradient-to-r from-[#009588]  to-[#004487] bg-clip-text text-transparent">
            {name}
          </h3>

          <p className="text-xl text-[#424242] -mt-1">
            Project Description : {description}
          </p>
        </div>
         <div className="text-center">
          <Image src="/ai-chat.svg" alt="AI Icon" width={70} height={70} className="" loading="lazy" />
          <span className="text-sm bg-gradient-to-r from-[#009588]  to-[#004487] bg-clip-text text-transparent">Running</span>
        </div>
      </CardHeader>
      <CardContent className="w-full md:w-[75%] ">
        <div>
           <p className="text-lg text-[#424242] -mt-1">Created : <span className="font-quicksand">{createdAt}</span></p>
        </div>
        <div className="w-fit">
        <div className="flex items-center gap-5 mt-2 text-lg text-[#424242] ">
          <div className="">
            <p className="">Type : <span className="font-quicksand">{type}</span></p>
          </div>
          <div className="">
            <p className="">Visibility : <span className="font-quicksand">{visibility}</span></p>
          </div>
          
        </div>
        <Separator className="!h-[2px] my-4 mt-5 " />
        </div>
      </CardContent>
    
      <CardFooter className="w-[75%]">
        <div className="flex flex-col gap-2 items-start md:flex-row w-full md:justify-between md:items-center">
        <div className="flex flex-col sm:flex-row w-full  sm:items-center gap-5">
          <Button size="sm" className="bg-[#009588] hover:bg-[#004487] rounded-3xl px-6 py-5 text-lg w-fit">
            Stop
          </Button>
          <Link href={`/adoptiq/actionable-bot?chat=${id}`}>
          <Button size="sm" className="bg-[#009588] hover:bg-[#004487] rounded-3xl px-6 py-5 text-lg w-fit"> 
            Open Chatbot
          </Button>
          </Link>
        </div>
        <Trash2 className="w-6 h-6 ml-1 sm:ml-0 mt-3 sm:mt-0 cursor-pointer text-[#009588]" />
        </div>
      </CardFooter>
      <div className="absolute -bottom-1 -right-1 w-[130px] h-[60px] bg-[#CDDAEA] rounded-tl-[50px] rounded-br-[20px] border-0
      before:content-[''] before:absolute before:w-[20px] before:h-[20px] before:bg-transparent before:rounded-br-[30px] before:top-[-20px] before:right-0 before:shadow-[5px_5px_5px_0px_#CDDAEA]
      after:content-[''] after:absolute after:w-[20px] after:h-[20px] after:bg-transparent after:rounded-br-[30px] after:bottom-0 after:left-[-20px] after:shadow-[5px_5px_5px_0px_#CDDAEA]">

      </div>
    </Card>
  );
};
