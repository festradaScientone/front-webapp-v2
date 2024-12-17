'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

import { interactModeService } from "@/services/data/interactiveMode";

const SelectionOption = ({
    selected,
    title,
    description,
    onClick,
    isHighlighted,
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
    </div>
  );

export default function SelectionMode({ options, data }) {
    const [selected, setSelected] = useState("Automatic");
    const [loading, setLoading] = useState(false);
    const { user, isLoaded } = useUser();
    const router = useRouter();

    const handleContinue = async (value) => {
        setLoading(true);        
        const res = await interactModeService(data.instance_id, value, data.token_clerk);       
        router.push(`/dashboard`);
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

    return(
    <>
    <div className="col-span-4 flex justify-center items-center">
          <div className="bg-white shadow-lg rounded-lg p-8 text-left w-full">
            <h1 className="text-3xl font-black mb-2 text-[#001238] font-[Adelle]">
              Select an Interaction Mode
            </h1>
            <p className="text-[#001238] mb-1 font-semibold font-[Adelle]">
              How would you like the Assistant to interact with your customers?
            </p>

            <div className="mx-auto p-4 space-y-8">
              {options.map((option) => (
                <SelectionOption
                  key={option.id}
                  selected={selected === option.id}
                  title={option.title}
                  description={option.description}
                  onClick={() => setSelected(option.id)}
                  isHighlighted={selected === option.id}
                />
              ))}

              <div className="flex justify-center mt-6">
                <button
                  onClick={() => handleContinue(selected)}
                  disabled={loading}                  
                  className={`flex text-[#001238] font-black px-8 py-3 rounded-lg transition-colors
              ${
                selected
                  ? "bg-[#d6f898] hover:bg-[#c0f75a] text-gray-900"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
                >
                  {loading ? <span className="loader"></span> : "Confirm and Activate"}
                  
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 justify-center items-center">
          <Image
            src={options.find((o) => o.id === selected).imgEn}
            width={400}
            height={400}
          />
          <div className="bg-white shadow-lg rounded-lg p-4 text-left w-full">
            <p className="text-[#001238] font-semibold text-sm">
              Note: If you need a more personal interaction, you can always
              disable your Assistant in a specific conversation by just typing
              💬❌
            </p>
          </div>
        </div>
    </>
    )
};
