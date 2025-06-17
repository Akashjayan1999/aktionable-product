'use client';

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowRight, ArrowLeft } from "lucide-react";


type ModuleItem = {
  title: string;
  desc: string;
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
      "(min-width: 768px)": {
        slides: {
          perView: 2.5,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
    },
    loop: true,
  });

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold text-center text-blue-900 mb-10">
        {heading.split("‘").map((part, i) =>
          i % 2 === 1 ? (
            <span key={i} className="text-teal-600 font-bold">‘{part}’</span>
          ) : (
            part
          )
        )}
      </h2>

      <div ref={sliderRef} className="keen-slider">
        {modules.map((mod, idx) => (
          <div
            key={idx}
            className="keen-slider__slide bg-gradient-to-br from-cyan-700 to-blue-800 text-white p-6 rounded-[1.75rem] shadow-md"
          >
            <h3 className="text-lg font-semibold mb-2">{mod.title}</h3>
            <p className="text-sm mb-4">{mod.desc}</p>
            <a
              href="#"
              className="text-white text-sm font-medium inline-flex items-center gap-2 hover:underline"
            >
              Read More <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
