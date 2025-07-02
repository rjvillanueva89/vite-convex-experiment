
import { Skeleton } from "@/components/ui/skeleton";

export function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2 p-4 border rounded-md">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-8 w-full" />
        </div>
        <div className="flex flex-col gap-2 p-4 border rounded-md">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-8 w-full" />
        </div>
        <div className="flex flex-col gap-2 p-4 border rounded-md">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-8 w-full" />
        </div>
      </div>
    </div>
  );
}
