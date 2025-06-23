import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[45vh]">
      <Image
        src="/hero.svg"
        alt="Network Globe"
        fill
        className="object-cover object-[40%_24%] absolute -z-20 w-full h-full"
      />
      <div className="max-w-4xl px-4 py-5 md:px-14 min-h-[45vh] grid content-end">
        {/* Text content */}
        <div className="">
          <h1 className="text-5xl font-semibold text-white leading-tight font-quicksand">
            Enterprise Generative AI, <br />
            <span >On Your Terms</span>
          </h1>
          <p className="mt-4 text-xl font-light font-quicksand text-white">
            The Aktionable.ai Platform empowers you to deploy responsible AI
            solutions quickly and confidently
          </p>
          <Button
            variant="tealRoundedOutline"
            // className="mt-8 rounded-3xl border-2 px-10 py-5 font-quicksand text-sm font-medium"
          >
            Our Service
          </Button>
          <Image
            src="/human-abs.svg"
            alt="Hero"
            width={250}
            height={250}
            className="absolute top-10 right-0 -z-10"
          />
        </div>

       
      </div>
    </section>
  );
}
