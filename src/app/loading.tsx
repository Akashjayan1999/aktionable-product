import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
    
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      
      <div className="relative z-10 w-full max-w-md px-6 sm:px-10 py-10 backdrop-blur-sm bg-white/60 rounded-2xl shadow-xl border border-white/20 space-y-6">
      
        <div className="flex flex-col items-center space-y-3">
          <Skeleton className="h-12 w-12 rounded-full bg-gradient-to-r from-gray-200 to-gray-300" />
          <Skeleton className="h-6 w-2/3 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200" />
        </div>

        
        <div className="space-y-5">
          {["Email", "Password"].map((label, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-1/4 bg-gradient-to-r from-gray-200 to-gray-300" />
              <Skeleton className="h-10 w-full rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 shadow-inner border border-gray-200/50" />
            </div>
          ))}
        </div>

   
        <div className="relative">
          <Skeleton className="h-10 w-full rounded-xl bg-gradient-to-r from-[#009588] to-[#004487] shadow-lg" />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#009588] to-[#004487] opacity-50 blur-lg animate-pulse"></div>
        </div>

        <Skeleton className="h-4 w-1/2 mx-auto rounded bg-gradient-to-r from-gray-100 to-gray-200" />
      </div>
    </div>
  );
}
