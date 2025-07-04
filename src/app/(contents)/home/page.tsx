import Hero from "./components/hero";
import SmartModulesSlider from "./components/slider";
import Footer from "./components/footer";
export default function HomePage() {
  const Modules = [
    {
      title: "AdoptIQ – Digital Adoption Analytics & Automation",
      desc: "AdoptIQ helps you maximize ROI on your software investments through advanced digital adoption analytics and in-app automation.. ",
      href:"adoptiq"
    },
    {
      title: "Contrakt AI – Intelligent Legal Automation",
      desc: "Contrakt AI speeds up legal workflows by intelligently analyzing contracts and documents. It leverages legal AI and natural language..",
       href:"contraktai"
    },
    {
      title: "MedUSA AI – Healthcare Claims & RCM Automation",
      desc: "MedUSA AI transforms healthcare administration by automating claims processing and revenue cycle management..",
      href:"medusaai"
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
