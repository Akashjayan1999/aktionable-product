import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen p-6 sm:p-10 bg-gradient-to-br from-slate-50 via-white to-slate-100">
     
      <div className="mb-8 space-y-2">
        <Skeleton className="h-8 w-1/3 sm:w-1/4 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300" />
        <Skeleton className="h-5 w-2/5 sm:w-1/3 rounded-md bg-gradient-to-r from-gray-100 to-gray-200" />
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl p-4 sm:p-6 bg-white/60 shadow-lg backdrop-blur-md border border-white/20 space-y-3"
          >
            <Skeleton className="h-4 w-1/2 bg-gradient-to-r from-gray-200 to-gray-300" />
            <Skeleton className="h-6 w-full rounded-md bg-gradient-to-r from-gray-100 to-gray-200" />
            <Skeleton className="h-4 w-3/4 bg-gradient-to-r from-gray-200 to-gray-300" />
          </div>
        ))}
      </div>

    
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Skeleton className="h-12 w-full rounded-xl bg-gradient-to-r from-[#009588] to-[#004487]" />
        <Skeleton className="h-12 w-full rounded-xl bg-gradient-to-r from-[#009588] to-[#004487]" />
      </div>
    </div>
  );
}
