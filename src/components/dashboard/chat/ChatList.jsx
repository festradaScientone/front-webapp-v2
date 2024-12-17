'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Bot } from "lucide-react";

export default function ChatList({ chats, selectedChatId }) {
  const router = useRouter();

  const handleChatClick = (chatId) => {
    router.push(`?chatId=${chatId}`);
  };

  return (
    <div>
      {chats.map((chat) => (
        <div
          key={chat.id}
          className={`cursor-pointer p-3 mb-2 rounded-lg flex gap-4 ${
            chat.id.toString() === selectedChatId ? 'bg-[#f5f8ff]' : 'bg-white'
          }`}
          onClick={() => handleChatClick(chat.id)}
        >
          <div>
            <Bot className="border border-[#0000000c] p-1 w-10 h-10 bg-white rounded" />
          </div>
          <div className='relative w-full'>
            {chat.messageNotSeen != 0 && <span className='absolute left-32 px-1 font-semibold bg-[#2c5ef9] text-xs text-white rounded-full'>{chat.messageNotSeen}</span>}            
            <span className='text-gray-500 absolute end-0 px-2 text-xs font-semibold'>{chat.lastMessageTime}</span>
            <h3 className="font-black text-[#001238] overflow-hidden text-ellipsis whitespace-nowrap w-1/2">{chat.name}</h3>
            <p className="text-sm text-[#808995] truncate overflow-hidden font-semibold">{chat.lastMessage}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
}