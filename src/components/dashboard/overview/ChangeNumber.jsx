"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChangeNumber } from "@/services/data/changeNumber";
import { useRouter } from "next/navigation";
import { postUpdateStatusInstance } from "@/services/data/UpdateStatusInstance"; 
import { postInsertHistoryInstance } from "@/services/data/insertHistoryInstance";

export const ChangeNumberComponent = ({data}) => {    
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChangeNumber = async () => {    
        setLoading(true);

        try {
            // Simulamos una llamada a API
            const response = await ChangeNumber(data.instance_id, data.token_instance);            
            if(response.success){ 
                await postUpdateStatusInstance(false, data.place_id.replace("instance", ""), data.token_clerk);
                await postInsertHistoryInstance("Deactivated", data.instance_id, data.place_id.replace("instance", ""), data.token_clerk);
                router.push('/sync-whatsapp') 
            }else{
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    };

    if (loading) {
        return (
            <div className="w-full h-10 bg-gray-300 rounded-md animate-pulse"></div>
        );
    }

    return (
        <Button className="bg-[#d6f898] text-black font-bold hover:bg-[#d7edaf] w-full" onClick={handleChangeNumber}>Change Number</Button>         
    )
}