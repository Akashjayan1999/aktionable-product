import Hero from "./components/hero";
import SmartModulesSlider from "@/components/slider";
import Footer from "./components/footer";
export default function HomePage() {
  const Modules = [
    {
      title: "TestIQ – Test Automation",
      desc: "Boost productivity with test automation tools designed to reduce human effort.",
    },
    {
      title: "CodeAI – AI Code Generator",
      desc: "Generate clean, optimized code using AI trained on industry patterns.",
    },
    {
      title: "DesignGen – AI UI Design System",
      desc: "Rapidly create UI systems using generative design principles and AI templates.",
    },
  ];

  return (
    <>
      <Hero />
      <SmartModulesSlider heading="Our ‘Smart’ Modules" modules={Modules} />
      <Footer />
    </>
  );
}
