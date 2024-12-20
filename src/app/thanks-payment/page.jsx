"use client";

import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { Loader2 } from "lucide-react";

export default function Page() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = () => {
    setIsLoading(true);
    router.push(`/sync-whatsapp`);
  };

  if (!isLoaded) {
    return (
      <>
        <div className="flex min-h-screen flex-col items-center bg-[#f5f8ff]">
          <Header />
          <div className="m-auto text-center grid gap-8 pb-16 max-w-5xl">
            <Skeleton className="h-[500px] bg-white shadow-lg rounded-lg p-8 text-left w-[800px]" />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#f5f8ff] font-['adelle-sans']">
      <Header />
      <main className="m-auto text-center grid gap-8 pb-16 max-w-5xl">
        <div className="flex justify-center items-center max-w-5xl">
          <div className="bg-white shadow-lg rounded-lg p-8 text-left w-full">
            <h1 className="text-2xl text-[#2c5ef9] mb-1 font-semibold font-[Adelle]">
              Thanks for your payment, {user.fullName}
            </h1>
            <h2 className="text-md font-bold mb-2 text-[#001238] ">
              Frank, your virtual assistant is almost ready. We just need some
              additional steps
            </h2>

            <div className="my-4 px-4 py-6 bg-[#f5f8ff] shadow-sm rounded-lg">
              <h3 className="text-[#001238] text-lg font-bold">
                Review the Terms and Conditions
              </h3>
              <br />
              <p></p>
              <p className="text-[#001238] font-semibold text-md">
                By accepting our terms, you consent to sharing your phone number
                and acknowledge that all business conversations will be
                monitored. Information provided is for general purposes; we do
                not guarantee accuracy.
              </p>
              <br />
              <p className="text-[#001238] font-semibold text-md">
                We are not liable for any loss or damage. External links are
                beyond our control. Our service may be temporarily unavailable
                due to technical issues.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 36.667c-9.204 0-16.666-7.462-16.666-16.667 0-9.205 7.462-16.667 16.667-16.667 9.204 0 16.666 7.462 16.666 16.667 0 9.205-7.462 16.667-16.666 16.667zm-1.662-10 11.785-11.785-2.357-2.357-9.428 9.428-4.714-4.715-2.357 2.358 7.071 7.07z"
                  fill="#2C5EF9"
                />
              </svg>

              <span className="text-[#001238] font-bold text-xl">
                I accept to the terms and conditions
              </span>
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={handleContinue}
                className="text-[#001238] font-bold px-10 py-3 rounded-lg transition-colors bg-[#d6f898] hover:bg-[#c0f75a] flex items-center"
                disabled={isLoading}
              >
                {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    "Continue"
                  )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
