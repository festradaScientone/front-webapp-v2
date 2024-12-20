"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { createLanguaje } from "@/actions/languaje";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Globe } from "lucide-react";
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

function Header() {
  const [position, setPosition] = useState("en");
  const t = useTranslations('Header');

  const changeLanguage = async (lang) => {  
    setPosition(lang);  
    createLanguaje(lang);
  };

  return (
    <>
      <header className="w-full">
        <div className="bg-white mx-auto px-8 sm:px-6 lg:px-8 flex-none border-b border-[#0000000c] w-full">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center space-x-4">
                <Link href="/">
                  <Logo />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block pl-14 content-center"></div>
            </div>

            <div className="gap-8 flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Globe onClick={changeLanguage} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>{t('Language')}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={changeLanguage}
                  >
                    <DropdownMenuRadioItem value="en">
                      {t('english')}
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="es">
                      {t('español')}
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

              <SignedIn>
                <UserButton />
              </SignedIn>

              <SignedOut>
                <Link
                  //href="/sign-in"
                  href="/signin"
                  className="flex font-extrabold gap-2 text-[#000b1a] font-['adelle-sans']"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.16 14a6.981 6.981 0 0 0-5.147 2.256A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16zM12 4a8 8 0 0 0-6.384 12.821A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634A8 8 0 0 0 12 4zm0 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                      fill="#001238"
                    />
                  </svg>
                  Sign In
                </Link>
              </SignedOut>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
