'use client';

import { Switch } from "@headlessui/react";
import { useState } from "react";
import { postUpdateStatusInstance } from "@/services/data/UpdateStatusInstance";

export const ActiveSwitch = ({ data }) => {
  
  const [loadingSwitch, setLoadingSwitch] = useState(false);
  const [isChecked, setIsChecked] = useState(data.isBotActive);
 
  const handleSwitch = async () => {
    setLoadingSwitch(true);
    
    try {      
      setIsChecked((prev) => !prev);
      handleUpdateStatus(!isChecked);
    } catch (error) {
      console.log(error);
    } 
  };

  const handleUpdateStatus = async (status) => {
    
    try {      
      const response = await postUpdateStatusInstance(status, data.id_assistant_clean, data.token_clerk);            
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingSwitch(false);
    }
  };

  return (    
    <>    
      {loadingSwitch && (
        <div className="w-full h-16 bg-gray-300 rounded-md animate-pulse"></div>
      )}
      {!loadingSwitch && (
        <>
          <Switch
            checked={isChecked}
            onChange={() => handleSwitch(isChecked)}
            className={`${isChecked ? "bg-[#2c5ef9]" : "bg-[#999999]"}
            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${isChecked ? "translate-x-9" : "translate-x-0"}
              pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <p className={`${isChecked ? "text-[#2c5ef9]" : "text-[#999999]"} text-xl font-bold`}>
            {isChecked ? "Active" : "Inactive"}
          </p>
        </>
      )}
    </>
  );
};
