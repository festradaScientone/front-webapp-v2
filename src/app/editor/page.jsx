"use client";
import Editor from "@/components/dashboard/knowledge/Editor";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import "@/styles/editorWelcome.css";
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const [showMovil, setShowMovil] = useState(false);
  const [initialData, setInitialData] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Capturar los valores de los parámetros
  const type = searchParams.get('type');
  const template = searchParams.get('template');

  useEffect(() => {
  if (type == "sample" ) {
    setInitialData([
      {
        type: "heading",
        props: {
          level: 3
        },
        content: [{type: "text",
          text: "Hotel name",
          styles: 
          { bold: true },          
        }],
      },
      {
        type: "paragraph",
        content: "Casa andina"
      },
      { type: "paragraph", },
  
      {
        type: "heading",
        props: {
          level: 3
        },
        content: [{type: "text",
          text: "Hotel Description",
          styles: { bold: true },}],
      },
      {
        type: "paragraph",
        content: "Consider a stay at Casa Andina Select Paracas and take advantage of a free breakfast buffet, a poolside bar, and a terrace. With amenities like a private beach and sun loungers, this hotel is the perfect place to soak up the sun. Be sure to enjoy a meal at Mar Adentro, the on-site restaurant. In addition to a garden and laundry facilities, guests can connect to free in-room WiFi."
      },
      { type: "paragraph", },
  
      {
        type: "heading",
        props: {
          level: 3
        },
        content: [{type: "text",
          text: "Addresse",
          styles: { bold: true },}],
      },
      {
        type: "paragraph",
        content: "KM 18.5 Autopista, Paracas, Pisco, 11550"
      },
      { type: "paragraph", },
  
      {
        type: "heading",
        props: {
          level: 3
        },
        content: [{type: "text",
          text: "Amenities",
          styles: { bold: true },}],
      },
      {
        type: "paragraph",
        content: "Breakfast included, pool, parking, private beach,restaurant, bar, pet friendly, gym, air conditioning, 24/7 front desk, free WiFi, laundry and housekeeping."
      },
      { type: "paragraph", },
  
      {
        type: "heading",
        props: {
          level: 3
        },
        content: [{type: "text",
          text: "Check-in time",
          styles: { bold: true },}],
      },
      {
        type: "paragraph",
        content: "3:00 PM"
      },
      { type: "paragraph", },
  
      {
        type: "heading",
        props: {
          level: 3
        },
        content: [{type: "text",
          text: "Check-out time",
          styles: { bold: true },}],
      },
      {
        type: "paragraph",
        content: "12:00 PM"
      },
      { type: "paragraph", },
      
    ])
  }else if(type == "scratch" ) {
    setInitialData([
      {
        type: "heading",
        props: {
          level: 3
        },
        content: [{type: "text",
          text: "Hotel name",
          styles: { bold: true },}],
      },
      {
        type: "paragraph",
        content: "Add a name"
      },
      { type: "paragraph", },
  
      {
        type: "heading",
        props: {
          level: 3
        },
        content: [{type: "text",
          text: "Hotel Description",
          styles: { bold: true },}],
      },
      {
        type: "paragraph",
        content: "Add a description"
      },
      { type: "paragraph", },
  
      {
        type: "heading",
        props: {
          level: 3
        },
        content: [{type: "text",
          text: "Addresse",
          styles: { bold: true },}],
      },
      {
        type: "paragraph",
        content: "Enter your address"
      },
      { type: "paragraph", },
  
      {
        type: "heading",
        props: {
          level: 3
        },
        content: [{type: "text",
          text: "Amenities",
          styles: { bold: true },}],
      },
      {
        type: "paragraph",
        content: "Enter a list of amenities"
      },
      { type: "paragraph", },
  
      {
        type: "heading",
        props: {
          level: 3
        },
        content: [{type: "text",
          text: "Check-in time",
          styles: { bold: true },}],
      },
      {
        type: "paragraph",
        content: "Enter check-in time"
      },
      { type: "paragraph", },
  
      {
        type: "heading",
        props: {
          level: 3
        },
        content: [{type: "text",
          text: "Check-out time",
          styles: { bold: true },}],
      },
      {
        type: "paragraph",
        content: "Enter check-out time"
      },
      { type: "paragraph", },
      
    ])
  }

  }, [searchParams]);

  const handleShowMovil = () => {
    setShowMovil(!showMovil);
  };

  const handleContinue = () => {
    router.push(`/sign-up`);
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-[#f5f8ff] font-['adelle-sans']">
        <Header />
        <div
          className={`w-full max-w-7xl gap-10 mt-12 mb-4 ${
            showMovil ? "flex" : ""
          }`}
        >
          <div className="w-4/6 mx-auto h-full bg-white rounded-lg shadow-lg relative">
          {initialData.length > 0 && (
            <Editor
              initialData={initialData}
            />
          ) }
            
            {!showMovil && (
              <div className="grid absolute cursor-pointer top-44 -right-8 bg-[#d6f898] w-[75px] h-[75px] content-center items-center justify-center rounded-full text-center">
                <svg
                  className="m-auto"
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.833 3.333v13.334h8.333V3.333H5.833zm-.834-1.666h10c.46 0 .834.373.834.833v15c0 .46-.373.833-.834.833H5a.833.833 0 0 1-.833-.833v-15c0-.46.373-.833.833-.833zm5 12.5a.833.833 0 1 1 0 1.666.833.833 0 0 1 0-1.666z"
                    fill="#001238"
                  />
                </svg>

                <span
                  onClick={handleShowMovil}
                  className="font-extrabold text-[#000b1a] px-1 text-center font-['adelle-sans']"
                >
                  Try it free
                </span>
              </div>
            )}
          </div>
          {showMovil && (
            <div className="relative w-2/6 bg-white rounded-lg shadow-lg h-fit px-6 py-4">
              {showMovil && (
                <div
                  onClick={handleShowMovil}
                  className="grid absolute cursor-pointer top-24 -left-6 bg-[#d6f898] w-[40px] h-[40px] content-center items-center justify-center rounded-full text-center"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 15v1.666h-15V15h15zM14.167 2.917l4.166 4.166-4.166 4.167V2.917zM10 9.167v1.666H2.5V9.166H10zm0-5.834V5H2.5V3.333H10z"
                      fill="#001238"
                    />
                  </svg>
                </div>
              )}
              <div className="w-full h-full rounded-lg bg-[#f5f8ff]">
                {/* <!-- Navbar --> */}
                <nav className="w-full h-16 bg-[#001238] rounded-t-xl flex justify-between items-center px-2">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://i.imgur.com/IAgGUYF.jpg"
                      className="rounded-md border border-white"
                      width="40"
                      height="40"
                    />
                    <div className="text-white">
                      <p className="text-md font-extrabold font-['adelle']">
                        Alex Cairo
                      </p>
                      <p className="text-sm">Casa Andina Assistant</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="mdi mdi-video text-gray-300"></i>
                    <i className="mdi mdi-phone text-gray-300"></i>
                    <i className="mdi mdi-dots-vertical text-gray-300"></i>
                  </div>
                </nav>

                {/*  <!-- Chat Content --> */}
                <div className="grid px-6 py-6 gap-6 max-h-[28rem] overflow-auto">
                  <div className="flex items-center pr-10">
                    <span className="h-auto bg-[#2c5ef9] text-white text-sm font-normal rounded-md px-3 py-4">
                      Hi Dr.Hendrikson, I haven't been feeling well for past few
                      days.
                    </span>
                  </div>
                  <div className="justify-end pl-10">
                    <span className="bg-[#001238] text-white text-sm font-normal rounded-md px-3 py-4 flex">
                      Lets jump on a video call.
                    </span>
                  </div>
                  <div className="flex items-center pr-10">
                    <span className="h-auto bg-[#2c5ef9] text-white text-sm font-normal rounded-md px-3 py-4">
                      Hi Dr.Hendrikson, I haven't been feeling well for past few
                      days.
                    </span>
                  </div>
                  <div className="flex items-center pr-10">
                    <span className="h-auto bg-[#2c5ef9] text-white text-sm font-normal rounded-md px-3 py-4">
                      Hi Dr.Hendrikson, I haven't been feeling well for past few
                      days.
                    </span>
                  </div>

                  {/* <!-- Add more chat bubbles as needed --> */}
                </div>

                {/* <!-- Input Area --> */}
                <div className="px-6 py-6">
                  <div className="bg-white rounded-lg shadow-md px-6 py-2 flex mt-4">
                    <input
                      placeholder="What can I help with?"
                      type="text"
                      className="w-full border border-white focus:outline-none"
                    />
                    <svg
                      className="cursor-pointer"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m27.158 3.696-6.817 23.858c-.188.66-.594.69-.896.087L13.75 16.25 2.403 11.711c-.637-.254-.629-.636.043-.86L26.304 2.9c.66-.22 1.04.15.854.797zm-3.364 2.675L8.515 11.464l7.046 2.818 3.8 7.602L23.795 6.37z"
                        fill="#2C5EF9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pt-4 text-center">
                <Button
                  onClick={handleContinue}
                  className="bg-[#d6f898] text-black font-bold hover:bg-[#d7edaf] gap-2"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#qpw1k6xrea)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.998 14.394c-.298-.15-1.766-.872-2.04-.972-.274-.1-.473-.15-.672.15-.199.299-.771.971-.945 1.17-.175.2-.349.225-.647.075-.299-.15-1.26-.465-2.401-1.482-.888-.792-1.487-1.77-1.661-2.068-.175-.3-.019-.46.13-.61.135-.133.3-.348.448-.523.15-.174.2-.299.299-.498.1-.2.05-.374-.025-.523-.075-.15-.672-1.62-.92-2.217-.243-.582-.489-.503-.672-.513-.174-.008-.374-.01-.573-.01-.199 0-.522.075-.796.373-.273.3-1.045 1.022-1.045 2.491 0 1.47 1.07 2.89 1.22 3.09.149.198 2.105 3.214 5.1 4.508.712.307 1.269.491 1.702.629.716.227 1.366.195 1.88.118.575-.086 1.768-.722 2.016-1.42.25-.697.25-1.295.174-1.42-.074-.124-.273-.199-.572-.348zm-5.448 7.438h-.004c-1.782 0-3.53-.48-5.055-1.384l-.363-.215-3.759.986 1.003-3.665-.236-.376a9.908 9.908 0 0 1-1.518-5.286c.002-5.476 4.458-9.931 9.936-9.931a9.865 9.865 0 0 1 7.022 2.912 9.872 9.872 0 0 1 2.906 7.027c-.002 5.477-4.457 9.932-9.932 9.932zm8.453-18.385A11.873 11.873 0 0 0 12.55-.058C5.963-.058.603 5.302.6 11.892c0 2.106.55 4.161 1.595 5.973L.5 24.058l6.335-1.662a11.939 11.939 0 0 0 5.71 1.454h.005c6.586 0 11.947-5.36 11.95-11.95a11.878 11.878 0 0 0-3.497-8.453z"
                        fill="#001238"
                      />
                    </g>
                    <defs>
                      <clipPath id="qpw1k6xrea">
                        <path
                          fill="#fff"
                          transform="translate(.5)"
                          d="M0 0h24v24H0z"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="font-['adelle-sans'] font-extrabold">
                    Add me to WhatsApp
                  </span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
