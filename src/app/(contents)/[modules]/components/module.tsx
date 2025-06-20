import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ModuleSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
  summary: string;
  guideLink: string;
}

export const ModuleSection = ({
  title,
  description,
  imageUrl,
  buttonText,
  buttonLink,
  summary,
  guideLink,
}: ModuleSectionProps) => {
  return (
    <section className=" py-12 px-0 relative mt-25 mx-5 md:mx-[48px]    h-min-2">
      <div className="flex justify-between">
        <div className="font-varela-round text-3xl font-normal mb-6 bg-gradient-to-r from-[#009588]  to-[#004487] bg-clip-text text-transparent">
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
      <div className="bg-[#CDDAEA] rounded-2xl flex xl:flex-row flex-col xl:items-center gap-6 p-5 xl:p-12 mt-6">
        <div className="text-xl font-varela-round font-normal text-[#000] w-100% xl:w-[50%] items-start self-start">
          {description}
        </div>
        <div className="mx-auto w-full md:w-2/3 xl:w-1/2 aspect-[400/200] xl:aspect-[650/300] relative ">
          <Image
            src={imageUrl}
            alt="module"
            fill
            className="object-cover mx-auto rounded-2xl"
            sizes="(max-width: 600px) 10vw, 600px"
          />
        </div>
      </div>
      <div className="mt-10 flex flex-col lg:flex-row gap-3 text-xl font-varela-round font-normal lg:items-center">
        <div>
          <Link href={buttonLink}>
            <Button className="rounded-3xl text-xl py-6">{buttonText}</Button>
          </Link>
        </div>
        <div className="flex-1 lg:mx-6 w-full">{summary}</div>
        <div>
          <Link href={guideLink} className="text-[#004487] flex ">
            How to Guide
            <Image src="/arrow3.svg" alt="arrow" width={25} height={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};
