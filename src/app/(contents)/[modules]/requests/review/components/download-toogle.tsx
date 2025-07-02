"use client";

import { useState } from "react";
import { Download } from "lucide-react"; // or use any icon library
import Image from "next/image";

export default function DocumentToggle() {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggle = () => setShowDetails(true);

  return (
    <div className="text-sm font-medium font-varela-round">
      {!showDetails ? (
        <div
          onClick={handleToggle}
          className="cursor-pointer inline-flex items-center text-xl  gap-1 text-[#004487] mb-4"
        >
          Document Info
          <Image
            src="/download.gif"
            alt="Loading animation"
            width={22}
            height={22}
            unoptimized 
          />
        </div>
      ) : (
        <div className="space-y-1  mb-4 md:w-3/4">
          <div className="flex justify-between border-b">
            <span className=" font-medium text-xl ">
              Document Name
            </span>
            <span className="font-medium text-xl ">Pages</span>
          </div>
          <div className="flex justify-between items-center   pb-1">
            <a
              href="/lease-agreement.pdf"
              download
              className="text-[#004487] hover:underline !text-base inline-flex items-center"
            >
              lease-agreement.pdf &nbsp;
              <Image
             src="/download.gif"
            alt="Loading animation"
            width={18}
            height={18}
            unoptimized 
          />
            </a>
            <span className="text-base">28</span>
          </div>
        </div>
      )}
    </div>
  );
}
