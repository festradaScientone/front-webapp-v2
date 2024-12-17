import { EllipsisVertical } from "lucide-react";
import { Bot } from "lucide-react";

async function getChatMessages(chatId) {
  // Simula una llamada a la API que tarda 1 segundo
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Aquí harías tu llamada real a la API
  return [
    { id: 1, sender: "Usuario", message: "Hola, ¿cómo estás?" },
    { id: 1, sender: "Asistente", message: "¡Hola! Estoy bien, gracias por preguntar. ¿En qué puedo ayudarte hoy?" },
    {
      id: 2,
      sender: "Usuario",
      message:
        "Tengo una pregunta sobre mi cuenta.",
    },
    {
      id: 3,
      sender: "Asistente",
      message: "Cual ?",
    },
  ];
}

export default async function ChatDetail({ chatId, chats }) {
  if (!chatId) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Selecciona un chat para ver los mensajes
      </div>
    );
  }

  const messages = await getChatMessages(chatId);
  const filteredNames = chats.filter((chat) => chat.id == chatId);

  return (
    <div>
      <div className="flex justify-between mb-4 border-b border-[#0000000c] pb-4">
        <h2 className="text-xl font-extrabold	text-[#001238] font-['adelle']">
          Chat with {filteredNames[0]["name"]}
        </h2>
        <EllipsisVertical className="text-[#2c5ef9] mx-4 cursor-pointer" />
      </div>

      <div className="space-y-6">
        {messages.map((message) => (
          <div className="flex" key={message.id}>
            {message.sender !== "Asistente" && (
              <div className="flex pr-6">
                <Bot className="mt-auto border border-[#0000000c] p-1 w-12 h-12 bg-white rounded" />
              </div>
            )}

            <div              
              className={`relative p-3 rounded-lg ${
                message.sender === "Asistente"
                  ? "bg-[#2c5ef9] ml-auto text-white text-right"
                  : "bg-[#f5f8ff] text-[#001238]"
              } w-1/2	`}
            >
              <p className="font-extrabold overflow-hidden text-ellipsis whitespace-nowrap">{/* w-10/12 */}{message.sender}</p>
              <p className="text-sm py-2">{message.message}</p>

              {message.sender !== "Asistente" ? (
                <span className="text-[#ff5c1b] absolute top-0 right-0 font-extrabold text-xs p-3">11:20 am</span>
              ):(
                <span className="text-[#d6f898] absolute top-0 left-0 font-extrabold text-xs p-3">11:20 am</span>
              )}

            </div>

            {message.sender === "Asistente" && (
              <>
              <div className="flex pl-6">
                <Bot className="mt-auto border border-[#0000000c] p-1 w-12 h-12 bg-white rounded" />
              </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
