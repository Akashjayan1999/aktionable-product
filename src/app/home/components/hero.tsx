import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Enterprise Generative AI, <br />
            <span className="text-blue-700">On Your Terms</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            The Aktionable.ai Platform empowers you to deploy responsible AI solutions quickly and confidently
          </p>
          <Button variant="outline" className="mt-8 border-gray-700 text-gray-800 hover:bg-gray-100">
            Our Service
          </Button>
        </div>

        {/* Hero image */}
        <div className="relative w-full h-96 rounded-xl overflow-hidden">
          <Image
            src="/hero-image.jpg"
            alt="Hero"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
