// components/ui/feature-card.tsx
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
interface FeatureCardProps {
  title: string;
  description: string;
  href?: string;
}

export function SlideCard({
  title,
  description,
  href = "#",
}: FeatureCardProps) {
  return (
    <Card className="bg-gradient-to-br from-[#009588] to-[#004487] text-white rounded-[1.75rem] shadow-none max-w-[370px] h-full relative">
     
     <CardHeader>
        <CardTitle><h3 className="text-2xl font-normal  font-quicksand">{title}</h3></CardTitle>
        <CardDescription>
           <p className="text-sm font-normal font-quicksand text-white w-[95%]">{description}</p>
        </CardDescription>
      </CardHeader>
     
      {/* <CardContent className="p-6">
        
       
        <a
          href={href}
          className="text-white text-sm font-medium inline-flex items-center gap-2 hover:underline"
        >
          Read More <ArrowRight className="h-4 w-4" />
        </a>
      </CardContent> */}
       <CardFooter className="flex items-end h-full text-2xl font-normal  font-quicksand">
         <Link
          href={href}
          className="text-white inline-flex items-center gap-5 hover:underline"
        >
          Read More <Image src="/arrow-tilt.svg" alt="Arrow Right" width={16} height={16} />
        </Link>
      </CardFooter>
      <div className="absolute -bottom-1 -right-1 w-[80px] h-[80px] bg-white rounded-tl-[50px] rounded-br-[20px] border-0
      before:content-[''] before:absolute before:w-[20px] before:h-[20px] before:bg-transparent before:rounded-br-[30px] before:top-[-20px] before:right-0 before:shadow-[5px_5px_5px_0px_#fff]
      after:content-[''] after:absolute after:w-[20px] after:h-[20px] after:bg-transparent after:rounded-br-[30px] after:bottom-0 after:left-[-20px] after:shadow-[5px_5px_5px_0px_#fff]">

      </div>
    </Card>
  );
}
