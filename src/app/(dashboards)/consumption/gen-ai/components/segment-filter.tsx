import Link from "next/link";
import { cn } from "@/lib/utils";

const options = ["Day", "Week", "Month", "Year", "All", "Custom"];

export function SegmentedFilter({ filter }: { filter: string }) {
  const selected = Array.isArray(filter) ? filter[0] || "Day" : filter || "Day";

  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 bg-white p-5 rounded-2xl w-full">
  <span className="text-[#004487] font-medium text-lg sm:text-xl lg:text-2xl whitespace-nowrap text-center lg:text-left">
    Show data for the
  </span>
  
  <div className="flex bg-[#D6E3F3] rounded-full space-x-1 overflow-x-auto scrollbar-hide w-full lg:w-auto">
    <Link
      key={selected}
      href={`?filter=${selected}`}
      scroll={false}
      className="text-sm sm:text-lg font-medium px-3 sm:px-6 lg:px-10 py-3 rounded-full transition-all duration-200 bg-[#004487] text-white whitespace-nowrap flex-shrink-0"
    >
      {selected?.charAt(0)?.toUpperCase() + selected?.slice(1) || "Day"}
    </Link>
    
    {options.map((option) => (
      <Link
        key={option}
        href={`?filter=${option.toLowerCase()}`}
        scroll={false}
        className="text-sm sm:text-lg font-medium px-3 sm:px-6 lg:px-10 py-3 rounded-full transition-all duration-200 text-white bg-transparent hover:bg-white/50 whitespace-nowrap flex-shrink-0"
      >
        {option}
      </Link>
    ))}
  </div>
</div>
  );
}
