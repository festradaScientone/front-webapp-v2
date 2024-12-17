import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { permanentRedirect } from 'next/navigation'
import { getClerkToken } from "@/services/auth/tokenSessionClerk";
import { getInfoUser } from "@/services/data/getInfoUser";
import { botStatus } from "@/services/data/botStatus";
import { botDataService } from "@/services/data/getBotData";
import { getInstanceData } from "@/services/data/dataInstance";
import { getMessagesTotal } from "@/services/data/getMessages";
import { StatusBot } from "@/services/data/statusInstance";

export default async function getData() {
  
  const { userId } = auth();

  try {
    const token = await getClerkToken();
    const userData = await getInfoUser(userId, token);
    
    // si bot no activo se redireccionar
    const statusBot = await StatusBot(JSON.parse(userData["type_chat"]["S"])["instance_id"], JSON.parse(userData["type_chat"]["S"])["token_instance"]);    
    /* if (statusBot.status == "standby") {   
      permanentRedirect("/sync-whatsapp");   
      return {
        redirect: {
          destination: "/sync-whatsapp", // Ruta donde completar los datos
          permanent: false, // Redirección temporal
        },
      };
    } */

    const basicBotData = await botStatus(
      JSON.parse(userData["type_chat"]["S"])["instance_id"],
      token
    );
    const advanceBotData = await botDataService(
      userData["id_assistant"]["S"],
      token
    );
    const instanceData = await getInstanceData(
      JSON.parse(userData["type_chat"]["S"])["instance_id"],
      JSON.parse(userData["type_chat"]["S"])["token_instance"]
    );
    const totalMessages = await getMessagesTotal(
      JSON.parse(userData["type_chat"]["S"])["instance_id"],
      JSON.parse(userData["type_chat"]["S"])["token_instance"]
    );

    const data = {
      token_clerk: token,
      instance_id: JSON.parse(userData["type_chat"]["S"])["instance_id"],
      token_instance: JSON.parse(userData["type_chat"]["S"])["token_instance"],
      place_id: userData["id_place"]["S"],
      name_place: userData["name_place"]["S"],
      user_id: userData["id_user"]["S"],
      id_assistant: userData["id_assistant"]["S"],
      id_assistant_clean: basicBotData["instanceId"]["S"],
      type_assistant: userData["type_assistant"]["S"],
      isBotActive: basicBotData["active_instance"]["BOOL"],
      name_space: basicBotData["name_space"]["S"],
      enable_mode: JSON.parse(basicBotData["enable_mode"]["S"])["mode"],
      termsConditions: basicBotData["terms_condition"]["BOOL"],
      bot_image: advanceBotData[0]["image_url"],
      bot_name: advanceBotData[0]["name"],
      bot_type: advanceBotData[0]["type"],
      totalMessages: totalMessages.messages_statistics,
      instanceData: instanceData,
      botStatus: statusBot.status,
    };    

    //console.log(instanceData)
    return data;
  } catch (error) {
    console.log(error);
  }
}
