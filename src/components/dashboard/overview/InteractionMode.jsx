"use client";

import { useState } from "react";
import { interactModeService } from "@/services/data/interactiveMode";

export const InteractionMode = ({ data }) => {  
  
  const [interactionMode, setInteractionMode] = useState(data.enable_mode);
  const [loadingInteractionMode, setLoadingInteractionMode] = useState(false);


  const handleCheckMode = async (mode) => {
    setLoadingInteractionMode(true);

    try {            
      setInteractionMode(mode);
      handleUpdateInteractionMode(mode);
    } catch (error) {
      console.log(error);
    } 
  };

  const handleUpdateInteractionMode = async (mode) => {
    
    try {      
      const response = await interactModeService(data.instance_id, mode, data.token_clerk);            
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingInteractionMode(false);
    }
  };

  if (loadingInteractionMode) {
    return (
      <>
        <div className="w-full h-28 bg-gray-300 rounded-md animate-pulse col-span-3"></div>
        <div className="w-full h-28 bg-gray-300 rounded-md animate-pulse col-span-3"></div>
      </>
    );
  }

  return (
    <>
      <div className="flex items-center h-full rounded-md col-span-3 gap-x-3 mb-6 p-4 border border-[#d1cce4]">
        <input
          id="automatic"
          name="interaction-mode"
          type="radio"
          checked={interactionMode === "Automatic"}
          onChange={() => handleCheckMode("Automatic")}
          className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        <label
          htmlFor="automatic"
          className="block relative text-sm text-base font-bold leading-6 text-[#130e4b] font-extrabold text-xl cursor-pointer"
        >
          <p className="flex">
            Automatic
          </p>
          <p className="pt-2 text-xs font-medium">
            The Assistant will automatically respond to ALL messages from your
            customers. You can always disable it for a specific conversation if
            you need a more personal interaction.
          </p>
        </label>
      </div>

      <div className="flex items-center h-full rounded-md col-span-3 gap-x-3 p-4 border border-[#d1cce4]">
        <input
          id="manual"
          name="interaction-mode"
          type="radio"
          checked={interactionMode === "Manual"}
          onChange={() => handleCheckMode("Manual")}
          className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        <label
          htmlFor="manual"
          className="block text-sm text-base font-bold leading-6 text-[#130e4b] font-extrabold text-xl cursor-pointer"
        >
          <p className="flex">
            Manual
          </p>
          <p className="pt-2 text-xs font-medium">
            The Assistant will NOT respond to any messages on your phone unless
            you instruct it to do so. This is useful for situations where you
            want to have more control.
          </p>
        </label>
      </div>
    </>
  );
};
