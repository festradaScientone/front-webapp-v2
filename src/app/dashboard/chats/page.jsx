export const metadata = {
  title: 'Chat',
};

import { Suspense } from "react";
import ChatDetail from "@/components/dashboard/chat/ChatDetail";
import ChatListWithSearch from "@/components/dashboard/chat/ChatListWithSearch";
import getData from "@/lib/data/data";
import { getChats } from "@/services/data/getChats";

/* async function getChats() {
  
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    { id: 1, name: "John Smith", lastMessage: "Hola, ¿cómo estás?", lastMessageTime: "3m", messageNotSeen: 4, photo: "", },
    { id: 2, name: "Rachel Branen", lastMessage: "¿Nos vemos mañana?", lastMessageTime: "10m", messageNotSeen: 2, photo: "", },
    { id: 3, name: "Will Watson", lastMessage: "Gracias por la información", lastMessageTime: "20m", messageNotSeen: 0, photo: "", },
  ];
} */

export default async function Page({ searchParams }) {
  const data = await getData();
  const chats = await getChats(data.name_space, data.token_clerk);  

  return (
    <div className="flex h-[95%] gap-10">
      <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto bg-white rounded-md border border-black/5 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)]">
        {/* <Suspense fallback={<div>Cargando chats...</div>}>  */}       
        <ChatListWithSearch 
            chats={chats} 
            selectedChatId={searchParams.chatId} 
          />
        {/* </Suspense> */}
      </div>
      <div className="w-3/4 bg-white p-4 bg-white rounded-md border border-black/5 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)]">
        <Suspense fallback={<div>Cargando chat...</div>}>
          <ChatDetail chatId={searchParams.chatId} chats={chats} />
        </Suspense>
      </div>
    </div>
  );
}
