import { ActiveSwitch } from "@/components/dashboard/overview/ActiveSwitch";
import { InteractionMode } from "@/components/dashboard/overview/InteractionMode";
import { ChangeNumberComponent } from "@/components/dashboard/overview/ChangeNumber";
import getData from "@/lib/data/data";


export const metadata = {
  title: "Assistants",
};

/* async function getData() {
  const { userId } = auth();

  try {
    const token = await getClerkToken();
    const userData = await getInfoUser(userId, token);
    const basicBotData = await botStatus(JSON.parse(userData["type_chat"]["S"])["instance_id"], token);
    const advanceBotData = await botDataService(userData["id_assistant"]["S"], token);
    const instanceData = await getInstanceData(JSON.parse(userData["type_chat"]["S"])["instance_id"], JSON.parse(userData["type_chat"]["S"])["token_instance"]);
    const totalMessages = await getMessagesTotal(JSON.parse(userData["type_chat"]["S"])["instance_id"], JSON.parse(userData["type_chat"]["S"])["token_instance"]);

    const data = {
      token_clerk: token,
      instance_id: JSON.parse(userData["type_chat"]["S"])["instance_id"],
      token_instance: JSON.parse(userData["type_chat"]["S"])["token_instance"],
      place_id: userData["id_place"]["S"],
      name_place: userData["name_place"]["S"],
      user_id: userData["id_user"]["S"],
      id_assistant: userData["id_assistant"]["S"],
      id_assistant_clean: basicBotData["instanceId"]['S'],
      type_assistant: userData["type_assistant"]["S"],
      isBotActive: basicBotData["active_instance"]["BOOL"],
      enable_mode: JSON.parse(basicBotData["enable_mode"]["S"])["mode"],
      termsConditions: basicBotData["terms_condition"]["BOOL"],
      bot_image: advanceBotData[0]["image_url"],
      bot_name: advanceBotData[0]["name"],
      bot_type: advanceBotData[0]["type"],
      totalMessages: totalMessages.messages_statistics,
      instanceData: instanceData
    };
    
    return data;  
  } catch (error) {
    console.log(error);
  }
} */

export default async function Page() {
  const data = await getData();  

  return (
    <>
      <div className="rounded-2xl py-6 grid grid-cols-2 gap-4 ">
        <div>
          <div className="border border-black/5 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] rounded-lg bg-white grid grid-cols-4 h-full">
            <div className="flex items-center p-6 gap-x-6 col-span-3">
              <div>
                <h3 className="text-3xl font-bold leading-7 tracking-tight text-[#130e4b]">
                  {data["bot_name"]}
                </h3>
                <p className="text-lg pt-2 font-semibold leading-6 text-[#2a2c49]">
                  {data["type_assistant"]}
                </p>
              </div>
            </div>
            <div className="border-l border-gray-200 p-6 content-center	text-center">
              <ActiveSwitch data={data} />
            </div>
          </div>
        </div>
        <div>
          <div className="border border-black/5 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] rounded-lg bg-white grid grid-cols-12 h-full">
            <div className="col-span-5 items-center p-4">
              <h3 className="text-2xl font-bold pb-3 leading-7 tracking-tight text-[#130e4b]">
                Phone Number
              </h3>
              <div className="border rounded-lg bg-[#f5f5f5]">
                <h3 className="text-2xl py-3 px-2 font-semibold leading-7 tracking-tight text-[#130e4b] rounded-lg">
                  {data.instanceData.id.replace("@c.us", "")}
                </h3>
              </div>
            </div>
            <div className="col-span-3 border-l border-gray-200 p-2 content-center	text-center ">
              <p className="text-[#130e4b] text-4xl font-extrabold">{data.totalMessages.sent}</p>
              <p className="text-[#808995] text-sm font-bold">
                Conversations Answered
              </p>
            </div>
            <div className="col-span-4 border-l border-gray-200 p-6 content-center	text-center">
              <ChangeNumberComponent data={data} />
            </div>
          </div>
        </div>
      </div>

      <div className="border border-black/5 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] rounded-lg bg-white grid grid-cols-6 p-6 gap-4">
        <div className="col-span-6">
          <h1 className="text-[#130e4b] font-extrabold text-2xl">
            Interaction Mode
          </h1>
        </div>
        <InteractionMode data={data} />
      </div>
    </>
  );
}
