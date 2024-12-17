"use client";

import { Bot } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function SideBar() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path
      ? "bg-[#2c5ef9] rounded-md text-white px-2"
      : " px-2";
  };

  return (
    <>
      <div className="my-4 bg-[#ffffff66] rounded-xl p-4 shadow-[0_0_10px_0_#0000000c]">
        <h2 className="font-bold text-[#001238] pb-1 mb-4 text-sm">
          ASSISTANTS
        </h2>

        <ul className="border border-[#0000000c] rounded-[4px] py-2 bg-[#f5f8ff] text-[#001238] font-bold">
          <li className="px-4 flex items-center py-3 gap-3 font-semibold border-b border-[#0000000c]">
            <Bot className="border border-[#0000000c] p-1 w-10 h-10 bg-white rounded" />
            <div>
              <h3 className="font-black	text-xl">Frank</h3>
              <p className="text-[#777e88] text-sm">
                Cusco Lodge Hotel Boutique
              </p>
            </div>
            {/* <SelectBot/> */}
          </li>
          <li className="my-2 px-4">
            <Link
              href="/dashboard"
              className={`flex items-center py-2 gap-3 font-black ${isActive(
                "/dashboard"
              )}`}
            >
              {pathname === "/dashboard" ? (
                <Image
                  src="/img/sidebar/overviewWhite.png"
                  width={24}
                  height={24}
                  alt="logo"
                />
              ) : (
                <Image
                  src="/img/sidebar/overview.webp"
                  width={24}
                  height={24}
                  alt="logo"
                />
              )}
              Overview
            </Link>
          </li>
          <li className="my-2 px-4">
            <Link
              href="/dashboard/knowledge"
              className={`flex items-center py-2 gap-3 font-black ${isActive(
                "/dashboard/knowledge"
              )}`}
            >
                {pathname === "/dashboard/knowledge" ? (
                <Image
                  src="/img/sidebar/knowledgeActive.png"
                  width={24}
                  height={24}
                  alt="logo"
                />
              ) : (
                <Image
                src="/img/sidebar/knowledge.webp"
                width={24}
                height={24}
                alt="logo"
              />
              )}
              
              Knowledge
            </Link>
          </li>
          <li className="my-2 px-4">
            <Link
              href="/dashboard/chats"
              className={`flex items-center py-2 gap-3 font-black ${isActive(
                "/dashboard/chats"
              )}`}
            >
                {pathname === "/dashboard/chats" ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.001 14.676v-.062c0-2.509 2.017-4.618 4.753-5.233C14.39 7.079 11.96 5.2 8.9 5.2c-3.32 0-5.9 2.213-5.9 4.78 0 .969.36 1.9 1.04 2.698.032.038.083.094.152.165a3.568 3.568 0 0 1 1.002 2.238 3.613 3.613 0 0 1 2.363-.442c.166.026.302.046.405.06a7.253 7.253 0 0 0 2.038-.023zm.457 1.951a9.215 9.215 0 0 1-2.753.055 18.997 18.997 0 0 1-.454-.067 1.612 1.612 0 0 0-1.08.212l-1.904 1.147a.806.806 0 0 1-.49.118.791.791 0 0 1-.729-.851l.15-1.781a1.565 1.565 0 0 0-.439-1.223 5.562 5.562 0 0 1-.241-.262c-.954-1.12-1.517-2.502-1.517-3.996 0-3.744 3.537-6.779 7.9-6.779 4.06 0 7.403 2.627 7.85 6.008 3.371.153 6.05 2.515 6.05 5.406 0 1.193-.456 2.296-1.229 3.19-.051.06-.116.13-.195.21a1.24 1.24 0 0 0-.356.976l.121 1.423a.635.635 0 0 1-.59.68.66.66 0 0 1-.396-.094l-1.544-.917a1.322 1.322 0 0 0-.874-.169c-.147.023-.27.04-.368.053-.316.04-.64.062-.969.062-2.694 0-4.998-1.408-5.943-3.401zm6.977 1.31a3.326 3.326 0 0 1 1.675.174 3.25 3.25 0 0 1 .842-1.502c.05-.05.087-.09.106-.112.489-.565.743-1.213.743-1.883 0-1.805-1.903-3.414-4.4-3.414-2.497 0-4.4 1.61-4.4 3.414s1.903 3.414 4.4 3.414a5.6 5.6 0 0 0 .714-.046c.08-.01.188-.025.32-.046z" fill="#fff"/>
            </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.001 14.676v-.062c0-2.509 2.017-4.618 4.753-5.233C14.39 7.079 11.96 5.2 8.9 5.2c-3.32 0-5.9 2.213-5.9 4.78 0 .969.36 1.9 1.04 2.698.032.038.083.094.152.165a3.568 3.568 0 0 1 1.002 2.238 3.613 3.613 0 0 1 2.363-.442c.166.026.302.046.405.06a7.253 7.253 0 0 0 2.038-.023zm.457 1.951a9.215 9.215 0 0 1-2.753.055 18.997 18.997 0 0 1-.454-.067 1.612 1.612 0 0 0-1.08.212l-1.904 1.147a.806.806 0 0 1-.49.118.791.791 0 0 1-.729-.851l.15-1.781a1.565 1.565 0 0 0-.439-1.223 5.562 5.562 0 0 1-.241-.262c-.954-1.12-1.517-2.502-1.517-3.996 0-3.744 3.537-6.779 7.9-6.779 4.06 0 7.403 2.627 7.85 6.008 3.371.153 6.05 2.515 6.05 5.406 0 1.193-.456 2.296-1.229 3.19-.051.06-.116.13-.195.21a1.24 1.24 0 0 0-.356.976l.121 1.423a.635.635 0 0 1-.59.68.66.66 0 0 1-.396-.094l-1.544-.917a1.322 1.322 0 0 0-.874-.169c-.147.023-.27.04-.368.053-.316.04-.64.062-.969.062-2.694 0-4.998-1.408-5.943-3.401zm6.977 1.31a3.326 3.326 0 0 1 1.675.174 3.25 3.25 0 0 1 .842-1.502c.05-.05.087-.09.106-.112.489-.565.743-1.213.743-1.883 0-1.805-1.903-3.414-4.4-3.414-2.497 0-4.4 1.61-4.4 3.414s1.903 3.414 4.4 3.414a5.6 5.6 0 0 0 .714-.046c.08-.01.188-.025.32-.046z" fill="#2C5EF9"/>
</svg>

              )}             
              Chats
            </Link>
          </li>
          <li className="my-2 px-4">
            <Link
              href="/dashboard/logs"
              className={`flex items-center py-2 gap-3 font-black ${isActive(
                "/dashboard/logs"
              )}`}
            >
                {pathname === "/dashboard/logs" ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z" fill="#fff"/>
            </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z" fill="#2C5EF9"/>
            </svg>
                )}
              

              Logs
            </Link>
          </li>
          <li className="my-2 px-4">
            <Link
              href="/dashboard/simulator"
              className={`flex items-center py-2 gap-3 font-black ${isActive(
                "/dashboard/simulator"
              )}`}
            >
              {pathname === "/dashboard/simulator" ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 4v16h10V4H7zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#fff"/>
</svg>

              ):(
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 4v16h10V4H7zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#2C5EF9"/>
</svg>

              )}
              Simulator
            </Link>
          </li>
          <li className="my-2 px-4">
            <Link
              href="/dashboard/configuration"
              className={`flex items-center py-2 gap-3 font-black ${isActive(
                "/dashboard/configuration"
              )}`}
            >
              {pathname === "/dashboard/configuration" ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.212 14.06a9.945 9.945 0 0 1 .001-4.12c1.11.131 2.079-.236 2.396-1.001.316-.765-.109-1.71-.986-2.402a9.945 9.945 0 0 1 2.913-2.914c.692.878 1.637 1.303 2.402.986.765-.317 1.133-1.286 1.002-2.396a9.945 9.945 0 0 1 4.12 0c-.131 1.11.236 2.08 1.001 2.396.765.317 1.71-.108 2.402-.985a9.944 9.944 0 0 1 2.914 2.912c-.878.692-1.303 1.638-.986 2.403.317.765 1.286 1.132 2.396 1.001a9.946 9.946 0 0 1 0 4.12c-1.11-.13-2.08.237-2.396 1.002-.317.764.108 1.71.985 2.402a9.946 9.946 0 0 1-2.912 2.914c-.693-.878-1.638-1.304-2.403-.987-.765.317-1.132 1.286-1.001 2.397a9.944 9.944 0 0 1-4.12-.001c.13-1.11-.237-2.079-1.002-2.396-.765-.317-1.71.109-2.402.986a9.944 9.944 0 0 1-2.914-2.913c.878-.692 1.304-1.637.987-2.402-.317-.765-1.286-1.133-2.397-1.002zM4 12.21c1.1.305 2.007 1.002 2.456 2.086.45 1.085.3 2.22-.262 3.212.097.102.196.201.298.298.993-.563 2.127-.712 3.212-.262 1.084.449 1.781 1.356 2.085 2.456.14.004.28.004.42 0 .305-1.1 1.002-2.007 2.087-2.456 1.084-.45 2.219-.3 3.212.262.102-.097.2-.196.297-.298-.562-.993-.711-2.127-.262-3.212.45-1.084 1.357-1.781 2.456-2.085.004-.14.004-.28 0-.421-1.1-.304-2.007-1.001-2.456-2.086-.45-1.084-.3-2.22.262-3.212a7.93 7.93 0 0 0-.297-.297c-.993.562-2.128.711-3.212.262C13.21 6.007 12.514 5.1 12.21 4a7.938 7.938 0 0 0-.42 0c-.305 1.1-1.002 2.008-2.086 2.457-1.085.45-2.22.3-3.212-.262-.102.096-.201.195-.298.297.563.993.712 2.128.262 3.212C6.007 10.79 5.1 11.485 4 11.79c-.004.14-.004.28 0 .42zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#fff"/>
            </svg>
            
              ):(
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.212 14.06a9.945 9.945 0 0 1 .001-4.12c1.11.131 2.079-.236 2.396-1.001.316-.765-.109-1.71-.986-2.402a9.945 9.945 0 0 1 2.913-2.914c.692.878 1.637 1.303 2.402.986.765-.317 1.133-1.286 1.002-2.396a9.945 9.945 0 0 1 4.12 0c-.131 1.11.236 2.08 1.001 2.396.765.317 1.71-.108 2.402-.985a9.944 9.944 0 0 1 2.914 2.912c-.878.692-1.303 1.638-.986 2.403.317.765 1.286 1.132 2.396 1.001a9.946 9.946 0 0 1 0 4.12c-1.11-.13-2.08.237-2.396 1.002-.317.764.108 1.71.985 2.402a9.946 9.946 0 0 1-2.912 2.914c-.693-.878-1.638-1.304-2.403-.987-.765.317-1.132 1.286-1.001 2.397a9.944 9.944 0 0 1-4.12-.001c.13-1.11-.237-2.079-1.002-2.396-.765-.317-1.71.109-2.402.986a9.944 9.944 0 0 1-2.914-2.913c.878-.692 1.304-1.637.987-2.402-.317-.765-1.286-1.133-2.397-1.002zM4 12.21c1.1.305 2.007 1.002 2.456 2.086.45 1.085.3 2.22-.262 3.212.097.102.196.201.298.298.993-.563 2.127-.712 3.212-.262 1.084.449 1.781 1.356 2.085 2.456.14.004.28.004.42 0 .305-1.1 1.002-2.007 2.087-2.456 1.084-.45 2.219-.3 3.212.262.102-.097.2-.196.297-.298-.562-.993-.711-2.127-.262-3.212.45-1.084 1.357-1.781 2.456-2.085.004-.14.004-.28 0-.421-1.1-.304-2.007-1.001-2.456-2.086-.45-1.084-.3-2.22.262-3.212a7.93 7.93 0 0 0-.297-.297c-.993.562-2.128.711-3.212.262C13.21 6.007 12.514 5.1 12.21 4a7.938 7.938 0 0 0-.42 0c-.305 1.1-1.002 2.008-2.086 2.457-1.085.45-2.22.3-3.212-.262-.102.096-.201.195-.298.297.563.993.712 2.128.262 3.212C6.007 10.79 5.1 11.485 4 11.79c-.004.14-.004.28 0 .42zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#2C5EF9"/>
</svg>

              )}
              Configuration
            </Link>
          </li>
        </ul>

        <h2 className="font-bold text-[#001238] mt-6 mb-4 text-sm">MAIN</h2>
        <ul className="text-[#001238] font-bold">
          <li className="flex items-center py-3 gap-3">
            <Link
              href="/dashboard/home"
              className="flex items-center py-2 gap-3 font-black"
            >
              <Image
                src="/img/sidebar/home.webp"
                width={24}
                height={24}
                alt="logo"
              />
              Home
            </Link>
          </li>
          <li className="flex items-center py-3 gap-3">
            <Link
              href="/dashboard/insights"
              className="flex items-center py-2 gap-3 font-black"
            >
              <Image
                src="/img/sidebar/insights.webp"
                width={24}
                height={24}
                alt="logo"
              />
              Insights
            </Link>
          </li>
          <li className="flex items-center py-3 gap-3">
            <Link
              href="/dashboard/settings"
              className="flex items-center py-2 gap-3 font-black"
            >
              <Image
                src="/img/sidebar/settings.webp"
                width={24}
                height={24}
                alt="logo"
              />
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
