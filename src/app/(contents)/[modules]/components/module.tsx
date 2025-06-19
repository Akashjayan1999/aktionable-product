
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ModuleSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
  guideLink: string;
}

export const ModuleSection = ({
  title,
  description,
  imageUrl,
  buttonText,
  buttonLink,
  guideLink,
}: ModuleSectionProps) => {
  return (
    <section className=" py-12 px-0 relative mt-25 mx-5 md:mx-[48px]    h-min-2">
      <div className="flex justify-between">
        <div className="font-varela-round text-3xl font-normal mb-6 bg-gradient-to-r from-[#009588]  to-[#004487] bg-clip-text text-transparent">{title}</div>
        <div><Button variant="link" className="text-white hover:no-underline cursor-pointer bg-[#009588] rounded-3xl px-4 font-normal font-varela-round"><Image src="/arrow2.svg" alt="arrow" width={25} height={20}/> Back to website</Button></div>
      </div>
      <div className="bg-[#CDDAEA] rounded-2xl flex xl:flex-row flex-col xl:items-center gap-6 p-5 xl:p-12 mt-6">
        <div className="text-xl font-varela-round font-normal text-[#000] w-100% xl:w-[50%] items-start">{description}</div>
        <div className="w-100% xl:w-[50%]"><Image src={imageUrl} alt="module"  width={650} height={500} className="object-cover w-full  mx-auto"/></div>
      </div>

      
    </section>
  );
};
