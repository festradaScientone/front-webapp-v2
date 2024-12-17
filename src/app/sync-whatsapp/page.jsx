
import Header from "@/components/Header";
import Image from "next/image";
import QrCode from "@/components/registerFlow/syncWhatsapp/QrCode";
import getData from "@/lib/data/data";
import { qrCodeService } from "@/services/data/qrCode";

export default async function Page() {
  const data = await getData();
  const Qr = await qrCodeService(data.instance_id, data.token_instance);  
  

  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-[#f5f8ff] font-['adelle-sans']">
        <Header />
        <main className="m-auto text-center grid gap-8 pb-16 max-w-5xl">
          <div className="flex justify-center items-center max-w-5xl">
            <div className="bg-white shadow-lg rounded-lg p-8 text-left w-full">
              <h1 className="text-2xl text-[#2c5ef9] mb-1 font-bold font-[Adelle]">
                Almost there
              </h1>
              <h2 className="text-3xl font-bold mb-2 text-[#001238] font-[Adelle]">
                Sync with WhatsApp
              </h2>

              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="bg-[#f5f8ff] rounded-xl min-w-[26rem]">
                  <div className="flex items-center gap-x-6 bg-[#001238] px-4 py-2 rounded-t-xl">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={data.bot_image}
                      width={40}
                      height={40}
                      alt=""
                    />
                    <div>
                      <h3 className="text-lg font-bold font-[Adelle] leading-7 tracking-tight text-white">
                        {data.bot_name}
                      </h3>
                      <p className="text-sm leading-6 text-white">
                        {data.type_assistant}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4 max-w-md mx-auto py-4 px-8">
                    <div className="bg-[#2c5ef9] text-white p-4 rounded-lg">
                      <p>
                        Hi, my name is {data.bot_name} and I’ll be your Virtual Assistant.
                      </p>
                    </div>
                    <div className="bg-[#2c5ef9] text-white p-4 rounded-lg">
                      <p>
                        To finish with the activation process, you need to add
                        me to your WhatsApp Business account with the following
                        steps:
                      </p>
                    </div>
                    <div className="bg-[#2c5ef9] text-white p-4 rounded-lg">
                      <ol className="list-decimal list-inside space-y-1">
                        <li>Open WhatsApp on your phone</li>
                        <li>Tap Menu or Settings and select Linked Devices</li>
                        <li>Tap on Link a Device</li>
                        <li>
                          Point your phone to this screen to capture the QR code
                          on the right
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="m-auto">
                  <QrCode initialQR={Qr.img} instance_id={data.instance_id} token_instance={data.token_instance} />                                    
                  <div className="flex justify-center mt-12">
                    <button
                      /*  onClick={handleContinue} */
                      className="text-[#001238] font-bold px-10 py-3 rounded-xl transition-colors bg-[#d6f898] hover:bg-[#c0f75a] flex gap-2"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.763 17H20V5H4v13.385L5.763 17zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM11 14h2v2h-2v-2zM8.567 8.813A3.501 3.501 0 1 1 12 13h-1v-2h1a1.5 1.5 0 1 0-1.471-1.794l-1.962-.393z"
                          fill="#001238"
                        />
                      </svg>
                      Additional Help
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
