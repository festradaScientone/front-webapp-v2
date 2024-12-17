"use client";

import { Globe } from "lucide-react";
import { Button } from "../../ui/button";
import Image from "next/image";
import Logo from "../../Logo";
import { UserButton } from "@clerk/clerk-react";

import { createLanguaje } from "@/actions/languaje";
import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [position, setPosition] = useState("en");
  const t = useTranslations("Header");

  const changeLanguage = async (lang) => {
    setPosition(lang);
    createLanguaje(lang);
  };

  return (
    <>
      <nav>
        <div className="bg-white mx-auto px-8 sm:px-6 lg:px-8 flex-none border-b border-[#0000000c]">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center space-x-4">
                <Logo />
              </div>
              <div className="hidden sm:ml-6 sm:block pl-14 content-center"></div>
            </div>

            <div className="gap-8 flex items-center">
              <Button className="bg-[#d6f898] text-[#001238] font-extrabold hover:bg-[#d7edaf]">
                New Assistant
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Globe onClick={changeLanguage} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>{t("Language")}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={changeLanguage}
                  >
                    <DropdownMenuRadioItem value="en">
                      {t("english")}
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="es">
                      {t("español")}
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Image
                src="/img/header/question.webp"
                width={24}
                height={24}
                alt="flag"
              />
              <div className="relative">
                <span className="bg-[#ff5c1b] text-white text-xs absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center rounded-full font-extrabold">3</span>
                <Image
                  src="/img/header/bellBig.webp"
                  width={24}
                  height={24}
                  alt="flag"
                />
              </div>              
              <UserButton />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
