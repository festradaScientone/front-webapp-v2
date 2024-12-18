
import { ConfigurationForm } from "@/components/dashboard/configuration/ConfigurationForm";

export const metadata = {
    title: 'Configuration',
};

export default async function Page(){
    return(
        <>
        <div className="w-full h-[95%] bg-white p-8 rounded-md mb-4 border border-black/5 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)]">
            <h1 className="text-[#130e4b] font-extrabold text-2xl pb-6">
            Edit your Assistant Details
            </h1>
            <ConfigurationForm/>
        </div>
        </>
    )
}