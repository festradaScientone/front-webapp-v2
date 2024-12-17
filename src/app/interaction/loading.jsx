import Header from "@/components/Header";
import { Skeleton } from "@/components/ui/skeleton";
export default function Loading() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-[#f5f8ff] font-['adelle-sans']">
        <Header />
        <main className="m-auto text-center grid grid-cols-2 gap-8 pb-16 max-w-7xl">
          <div className="rounded-lg p-3 mb-2">
            <Skeleton className="h-[500px] bg-white shadow-lg rounded-lg p-8 text-left w-[800px]" />
          </div>
          {/* <div className="rounded-lg p-3 mb-2">
            <Skeleton className="h-[500px] bg-white shadow-lg rounded-lg p-8 text-left w-[200px]" />
          </div> */}
        </main>
      </div>
    </>
  );
}
