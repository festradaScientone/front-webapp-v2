"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import ChatList from "./ChatList";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ChatListWithSearch({ chats, selectedChatId }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredChats = searchTerm
    ? chats.filter(
        (chat) =>
          chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          chat.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : chats;

    const handleChangeSelect = (value) => {
      console.log(value);
    };

  return (
    <div>
      <div className="relative mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              type="text"
              placeholder="Search"
              className="pl-12 w-full text-md font-semibold placeholder:text-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
          </div>
          <div>
            <Select onValueChange={handleChangeSelect} defaultValue="newest" >
              <SelectTrigger className="w-full font-extrabold text-[#001238]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest" className="font-extrabold text-[#001238]">Newest</SelectItem>
                <SelectItem value="oldest" className="font-extrabold text-[#001238]">Oldest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <ChatList chats={filteredChats} selectedChatId={selectedChatId} />
    </div>
  );
}
