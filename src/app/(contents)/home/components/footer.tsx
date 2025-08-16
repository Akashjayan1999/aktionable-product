import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative  min-h-[8vh]  text-white">
      <Image
        src="/small-footer.svg"
        alt="Network Globe"
        fill
        className="object-cover -z-20 w-full h-full"
      />
      <div className="h-full">
      <div className="flex min-h-[8vh] p-4 justify-center text-center items-center text-lg font-varela-round font-normal">
        2025 aktionable.ai. A
        KT2i (Kanchi Technologies)
        Company | All Rights Reserved.
      </div>
      </div>
    </footer>
  );
}
