"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SlideCard } from "./slider-card";
import Image from "next/image";

type ModuleItem = {
  title: string;
  desc: string;
  href:string
};

type SmartModulesSliderProps = {
  heading?: string;
  modules: ModuleItem[];
};

export default function SmartModulesSlider({
  heading = "Our ‘Smart’ Modules",
  modules,
}: SmartModulesSliderProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1.2,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 600px)": {
        slides: {
          perView: 1.7,
          spacing: 20,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 2.5,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
    },
    loop: true,
  });

  return (
    <div className="relative min-h-[45vh] max-w-7xl mx-auto px-4 py-5">
      <h2 className="text-6xl text-center bg-gradient-to-r from-[#009588] to-[#004487] bg-clip-text text-transparent mb-6 font-varela-round font-normal">
        {/* {heading.split("‘").map((part, i) =>
          i % 2 === 1 ? (
            <span key={i} className="text-teal-600 font-bold">‘{part}’</span>
          ) : (
            part
          )
        )} */}
        {heading}
      </h2>

      <div ref={sliderRef} className="keen-slider">
        {modules.map((mod, idx) => (
          <div key={idx} className="keen-slider__slide mx-auto">
            <SlideCard title={mod.title} description={mod.desc} href={mod.href} />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center mt-6 static md:absolute top-0  right-3 ">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="p-2 bg-blue-90 text-white rounded-full"
        >
          <div className="relative">
           <Image src="/arrow-bg.svg" alt="Arrow Right" width={40} height={40} />
           <Image src="/arror.svg" alt="Arrow Right" width={20} height={20} className="absolute top-[10px] left-[10px]" />
          </div>
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="p-2  text-white rounded-full"
        >
         <div className="relative">
           <Image src="/arrow-bg.svg" alt="Arrow Right" width={40} height={40} />
           <Image src="/arror.svg" alt="Arrow Right" width={20} height={20} className="absolute top-[10px] left-[10px] transform rotate-180" />
          </div>
        </button>
      </div>
      <div className="flex justify-center gap-5 mt-5">
        <Image src="/dash.svg" alt="dash" width={60} height={60}/>
       <Image src="/dash2.svg" alt="dash" width={60} height={60}/>
       <Image src="/dash.svg" alt="dash" width={60} height={60}/>
      </div>
       
    </div>
  );
}
