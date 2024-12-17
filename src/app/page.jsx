"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const router = useRouter();
  const t = useTranslations('MarketingPage');

  const handleValueChange = (value) => {
    router.push(`/welcome?type=${value.toLowerCase()}`);
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#f5f8ff]">
      <Header />
      <main className="m-auto text-center grid gap-8 pb-16 max-w-5xl">
        <Image
          src="/img/home/logoHome.png"
          width={100}
          height={100}
          alt="Your Company"
          className="mx-auto"
        />
        <h1 className="text-[#001238] font-extrabold text-3xl font-['adelle']">
        {t('title')}
        </h1>
       
        <p className="text-[#808995] text-xl font-['adelle-sans']">
        {t('description')}
        </p>
        <h3 className="text-[#001238] font-extrabold text-xl font-['adelle']">
        {t('subtitle')}
        </h3>
        <div className="bg-[#d6f898] flex px-4 py-2 rounded-lg shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] m-auto w-[34rem] gap-4 items-center flex-wrap	justify-between	">
          <Image
            src="/img/marketing/magic.png"
            width={24}
            height={24}
            alt="flag"
          />
          <span className="font-extrabold text-[#001238] font-['adelle-sans']">
            {t('button')}
          </span>

          <Select onValueChange={handleValueChange}>
            <SelectTrigger className="w-[180px] bg-white font-extrabold text-[#001238] font-['adelle-sans']">
              <SelectValue placeholder={t('options')} />
            </SelectTrigger>
            <SelectContent className="font-extrabold text-[#001238] font-['adelle-sans']">
              <SelectItem value="Hotel">{t('hotel')}</SelectItem>
              <SelectItem value="Store">{t('store')}</SelectItem>
              <SelectItem value="Travel Agency">{t('Travel Agency')}</SelectItem>
              <SelectItem value="Restaurant">{t('restaurant')}</SelectItem>
              <SelectItem value="School">{t('school')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </main>
    </div>
  );
}
