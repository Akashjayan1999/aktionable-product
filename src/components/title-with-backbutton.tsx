import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

interface HeaderWithBackButtonProps {
  title: string;
  backHref: string;
}

export default function TitleWithBackButton({
  title,
  backHref,
}: HeaderWithBackButtonProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="font-varela-round text-3xl font-normal mb-6 bg-gradient-to-r from-[#009588] to-[#004487] bg-clip-text text-transparent">
        {title}
      </div>
      <Link
        href={backHref}
      >
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
      </Link>
    </div>
  );
}
