import { Card, CardContent, CardFooter,CardHeader,CardDescription} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreVertical, Trash2, Eye, Info, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
interface ProjectCardProps {
  name: string;
  createdAt: string;
  status: "Not Deployed" | "Success" | "Failed";
  completed?: boolean;  
}

export const ProjectCard = ({ name, createdAt, status, completed }: ProjectCardProps) => {
  const getStatusElement = () => {
    switch (status) {
      case "Not Deployed":
        return (
          <div className="flex items-center gap-1 text-lg text-[#424242]">
            <Info className="w-5 h-5" /> Not Deployed
          </div>
        );
      case "Success":
        return (
          // <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
          //   {/* <CheckCircle className="w-4 h-4" /> Success */}
          // </div>
          <>
          </>
        );
      case "Failed":
        return (
          // <div className="flex items-center gap-1 text-sm text-red-600 font-medium">
          //   <XCircle className="w-4 h-4" /> Failed
          // </div>
          <>
          </>
        );
    }
  };

  return (
    <Card className="w-full shadow-none rounded-3xl px-4">
      <CardHeader className="">
        <div className="flex justify-between">
          <h3 className="text-3xl bg-gradient-to-r from-[#009588]  to-[#004487] bg-clip-text text-transparent">{name}</h3>
          <MoreVertical className="w-6 h-6 text-[#424242]" />
        </div>
        <p className="text-lg text-[#424242] -mt-1">Created : {createdAt}</p>

        {getStatusElement()}
         <Separator className="!h-[2px] my-4 mt-5" />
        </CardHeader>
       
         <CardFooter>
        <div className="flex flex-row w-full justify-between items-center ">
          <Button size="sm" className={cn(!completed && "bg-[#009588] hover:bg-[#004487]",status === "Failed" && "bg-[#CA1919] hover:bg-red-700", status === "Success" && completed && "bg-[#48D53B] hover:bg-[#80d878]","rounded-3xl px-6 py-5")}> 
            {status === "Failed" || status === "Success" ? status : "Publish"}
          </Button>
      
          <div className="flex items-center gap-3">
            {completed && status === "Success" && (
              <Eye className="w-6 h-6  cursor-pointer text-[#009588]" />
            )}
             <Trash2 className="w-6 h-6  cursor-pointer text-[#009588]" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};