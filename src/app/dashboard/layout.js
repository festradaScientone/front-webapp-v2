import SideBar from "@/components/dashboard/general/SideBar";
import Header from "@/components/dashboard/general/Header";

export default function RootLayout({ children }) {
    return (
      <div className="h-screen bg-[#f5f8ff] flex flex-col font-['adelle-sans']">
        <Header/>
        <div className="flex flex-col w-full md:flex-row md:overflow-hidden h-full mx-auto px-2 sm:px-6 lg:px-8">
          <div className="w-full flex-none md:w-80">
            <SideBar/>
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:pt-4 md:px-6">{children}</div>
        </div>
      </div>
    );
  }