"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import { useTranslations } from "next-intl";

const SelectionOption = ({
  selected,
  title,
  description,
  onClick,
  isHighlighted,
  t,
  id,
  url,
  handleUrlChange
}) => (
  <div
    className={`py-5 px-8 rounded-md cursor-pointer transition-all ${
      isHighlighted
        ? "bg-[#2c5ef9] text-white"
        : "bg-[#f5f8ff] hover:bg-gray-100"
    }`}
  >
    <div onClick={onClick} className={`flex items-center gap-4`}>
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
          {t(title)}
        </h3>
        <p
          className={`text-md font-['adelle-sans'] ${
            isHighlighted ? "text-gray-100" : "text-[#808995]"
          }`}
        >
          {t(description)}
        </p>
      </div>
    </div>
    {id == "url" && selected && (
      <div className="flex items-center rounded-md pt-4 text-md">
        <div className="px-3 py-3 bg-[#001238] overflow-hidden rounded-l-md">
          <p className="font-[adelle] font-extrabold text-white">http://</p>
        </div>
        <input
          type="text"
          className="w-full px-3 py-3 focus:outline-none text-[#001238] font-semibold rounded-r-md"
          placeholder="Enter a URL"
          value={url}
          onChange={(e)=>handleUrlChange(e)}
        />
      </div>
    )}
  </div>
);

const StartOptions = ({ handleContinue, t, url, handleUrlChange }) => {
  const [selected, setSelected] = useState(null);

  const options = [
    {
      id: "sample",
      title: "optionOneTitulo",
      description: "optionOneParagraph",
      path: "sample",
    },
    {
      id: "url",
      title: "optionTwoTitulo",
      description: "optionTwoParagraph",
      path: "url",
    },
    {
      id: "scratch",
      title: "optionThreeTitulo",
      description: "optionThreeParagraph",
      path: "scratch",
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
          t={t}
          id={option.id}
          url={url}
          handleUrlChange={handleUrlChange}
        />
      ))}

      <div className="flex justify-center mt-6">
        <button
          onClick={() => handleContinue(selected)}
          disabled={!selected}
          className={`text-[#001238] font-extrabold px-8 py-3 rounded-lg transition-colors font-['adelle-sans']
              ${
                selected
                  ? "bg-[#d6f898] hover:bg-[#c0f75a] text-gray-900"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default function Page() {
  const t = useTranslations("welcome");
  const searchParams = useSearchParams();
  const router = useRouter();
  const [url, setUrl] = useState("www.booking.com/hotel/pe/casa-andina");

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleContinue = (value) => {
    const type = searchParams.get("type");
    router.push(
      `/editor?type=${value.toLowerCase()}&template=${type.toLowerCase()}`
    );
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#f5f8ff] font-['adelle-sans']">
      <Header />
      <main className="m-auto text-center grid gap-8 pb-16 max-w-5xl">
        <div className="flex justify-center items-center max-w-5xl">
          <div className="bg-white shadow-lg rounded-lg p-8 text-left w-full">
            <h1 className="text-3xl font-black mb-2 text-[#001238] font-[Adelle]">
              {t("title")}
            </h1>
            <p className="text-[#001238] mb-4 font-semibold font-['adelle-sans']">
              {t("description")}
            </p>

            <StartOptions handleContinue={handleContinue} t={t} url={url} handleUrlChange={handleUrlChange} />
          </div>
        </div>
      </main>
    </div>
  );
}
