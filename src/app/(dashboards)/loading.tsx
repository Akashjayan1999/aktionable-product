import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 via-white to-slate-100">
      
      <aside className="hidden md:block w-64 p-4 border-r bg-white/60 shadow-inner backdrop-blur-md space-y-4">
        <Skeleton className="h-10 w-3/4 rounded-lg" />
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-6 w-full rounded-md" />
        ))}
      </aside>

      
      <main className="flex-1 p-6 sm:p-10 space-y-8">
       
        <div className="flex justify-between items-center">
          <Skeleton className="h-8 w-1/4 rounded-lg" />
          <div className="flex items-center space-x-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-lg" />
          </div>
        </div>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/60 shadow backdrop-blur-md space-y-3 border border-white/30">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-8 w-full rounded-md" />
            </div>
          ))}
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
       
          <div className="p-6 rounded-xl bg-white/60 shadow backdrop-blur-md border border-white/30 space-y-4">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-40 w-full rounded-md" />
          </div>

        
          <div className="p-6 rounded-xl bg-white/60 shadow backdrop-blur-md border border-white/30 space-y-4">
            <Skeleton className="h-5 w-1/3" />
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-6 w-full rounded-md" />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
