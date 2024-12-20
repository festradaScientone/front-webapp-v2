"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/Header";
import { Loader2 } from "lucide-react";

const SelectionOption = ({
  selected,
  title,
  description,
  onClick,
  isHighlighted,
  payment,
}) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-4 py-5 px-8 rounded-md cursor-pointer transition-all
        ${
          isHighlighted
            ? "bg-[#2c5ef9] text-white"
            : "bg-[#f5f8ff] hover:bg-gray-100"
        }`}
  >
    {selected ? (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 27.5C8.096 27.5 2.5 21.904 2.5 15S8.096 2.5 15 2.5 27.5 8.096 27.5 15 21.904 27.5 15 27.5zm0-2.5c5.523 0 10-4.477 10-10S20.523 5 15 5 5 9.477 5 15s4.477 10 10 10zm0-3.75a6.25 6.25 0 1 1 0-12.5 6.25 6.25 0 0 1 0 12.5z"
          fill="#F5F8FF"
        />
      </svg>
    ) : (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 27.5C8.096 27.5 2.5 21.904 2.5 15S8.096 2.5 15 2.5 27.5 8.096 27.5 15 21.904 27.5 15 27.5zm0-2.5c5.523 0 10-4.477 10-10S20.523 5 15 5 5 9.477 5 15s4.477 10 10 10z"
          fill="#001238"
        />
      </svg>
    )}
    <div className="flex-1">
      <h3
        className={`font-black text-xl font-[Adelle] ${
          isHighlighted ? "text-white" : "text-[#001238]"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-md ${
          isHighlighted ? "text-gray-100" : "text-[#808995]"
        }`}
      >
        {description}
      </p>
    </div>
    {selected ? (
      <div className="bg-[#001238] px-4 py-2 text-center rounded-xl">
        <p className="font-[Adelle] font-bold text-3xl">${payment}</p>
        <p className="text-sm text-[#d6f898] font-semibold">Month</p>
      </div>
    ) : (
      <div className="bg-[#ffffff] px-4 py-2 text-center rounded-xl">
        <p className="font-[Adelle] font-bold text-3xl">${payment}</p>
        <p className="text-sm text-[#808995] font-semibold">Month</p>
      </div>
    )}
  </div>
);

const StartOptions = ({ handleContinue, isLoading }) => {
  const [selected, setSelected] = useState("pro");

  const options = [
    {
      id: "pro",
      title: "Pro Account",
      description:
        "Up to 1,000 messages | Up to 200 voice messages | Basic analytics",
      path: "pro",
      payment: "12",
    },
    {
      id: "enterprise",
      title: "Enterprise",
      description:
        "Up to 5,000 messages | Up to 500 voice messages | Advanced analytics",
      path: "enterprise",
      payment: "20",
    },
  ];

  return (
    <div className="mx-auto p-4 space-y-4">
      {options.map((option) => (
        <SelectionOption
          key={option.id}
          selected={selected === option.id}
          title={option.title}
          description={option.description}
          onClick={() => setSelected(option.path)}
          isHighlighted={selected === option.id}
          payment={option.payment}
        />
      ))}

      <div className="flex justify-center mt-6">
        <button
          onClick={() => handleContinue(selected)}
          disabled={!selected}
          className={`text-[#001238] font-bold px-8 py-3 rounded-lg transition-colors flex items-center
              ${
                selected
                  ? "bg-[#d6f898] hover:bg-[#c0f75a] text-gray-900"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
        >
          {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    "Continue to Payment"
                  )}
          
        </button>
      </div>
    </div>
  );
};

export default function Page() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = (value) => {
    setIsLoading(true);
    router.push(`/payment-details?plan=${value.toLowerCase()}`);
  };

  if (!isLoaded) {
    return (
      <>
        <div className="m-auto text-center grid gap-8 pb-16 max-w-5xl">
          <Skeleton className="h-[500px] bg-white shadow-lg rounded-lg p-8 text-left w-[800px]" />
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
            <p className="text-[#2c5ef9] mb-1 font-semibold">
              Welcome {user.fullName}!
            </p>
            <h1 className="text-3xl font-black mb-2 text-[#001238] font-[Adelle]">
              Select a plan to continue
            </h1>

            <StartOptions handleContinue={handleContinue} isLoading={isLoading} />
          </div>
        </div>
      </main>
    </div>
  );
}
