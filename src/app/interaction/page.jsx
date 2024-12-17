
import Header from "@/components/Header";
import SelectionMode from "@/components/registerFlow/interactionMode/Selection";
import getData from "@/lib/data/data";
import '@/styles/interaction.css';

const options = [
  {
    id: "Automatic",
    title: "Automatic",
    description:
      "The Assistant will automatically respond to ALL messages from your customers.",
    imgEn: "/img/interaction/phoneAutomatic.webp",
    imgEs: "/img/interaction/phoneAutomaticSpanish.png",
  },
  {
    id: "Manual",
    title: "Manual",
    description:
      "The Assistant will NOT respond to any messages on your phone unless you instruct it to do so.",
    imgEn: "/img/interaction/phoneManual.webp",
    imgEs: "/img/interaction/phoneManualSpanish.png",
  },
];

export default async function Page() {
  const data = await getData();
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#f5f8ff] font-['adelle-sans']">
      <Header />
      <main className="m-auto text-center grid grid-cols-6 gap-8 pb-16 max-w-7xl">
        <SelectionMode options={options} data={data} />
      </main>
    </div>
  );
}
