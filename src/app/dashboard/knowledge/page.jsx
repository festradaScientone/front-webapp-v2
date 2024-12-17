import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/knowledge/Editor"), {
  ssr: false,
});

export const metadata = {
  title: "Knowledge",
};

async function getData() {
  // Simula una llamada a la API que tarda 2 segundos
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Aquí harías tu llamada real a la API
  // const res = await fetch('https://api.example.com/data')
  // return res.json()

  return [
    {
      type: "heading",
      props: {
        level: 3,
      },
      content: [{ type: "text", text: "Hotel name", styles: { bold: true } }],
    },
    {
      type: "paragraph",
      content: "Casa andina",
    },
    { type: "paragraph" },

    {
      type: "heading",
      props: {
        level: 3,
      },
      content: [
        { type: "text", text: "Hotel Description", styles: { bold: true } },
      ],
    },
    {
      type: "paragraph",
      content:
        "Consider a stay at Casa Andina Select Paracas and take advantage of a free breakfast buffet, a poolside bar, and a terrace. With amenities like a private beach and sun loungers, this hotel is the perfect place to soak up the sun. Be sure to enjoy a meal at Mar Adentro, the on-site restaurant. In addition to a garden and laundry facilities, guests can connect to free in-room WiFi.",
    },
    { type: "paragraph" },

    {
      type: "heading",
      props: {
        level: 3,
      },
      content: [{ type: "text", text: "Addresse", styles: { bold: true } }],
    },
    {
      type: "paragraph",
      content: "KM 18.5 Autopista, Paracas, Pisco, 11550",
    },
    { type: "paragraph" },

    {
      type: "heading",
      props: {
        level: 3,
      },
      content: [{ type: "text", text: "Amenities", styles: { bold: true } }],
    },
    {
      type: "paragraph",
      content:
        "Breakfast included, pool, parking, private beach,restaurant, bar, pet friendly, gym, air conditioning, 24/7 front desk, free WiFi, laundry and housekeeping.",
    },
    { type: "paragraph" },

    {
      type: "heading",
      props: {
        level: 3,
      },
      content: [
        { type: "text", text: "Check-in time", styles: { bold: true } },
      ],
    },
    {
      type: "paragraph",
      content: "3:00 PM",
    },
    { type: "paragraph" },

    {
      type: "heading",
      props: {
        level: 3,
      },
      content: [
        { type: "text", text: "Check-out time", styles: { bold: true } },
      ],
    },
    {
      type: "paragraph",
      content: "12:00 PM",
    },
    { type: "paragraph" },
  ];
}

export default async function Page() {
  const data = await getData();
   
  return (
    <>
      <div className="w-full h-[95%] bg-white rounded-md mb-4 border border-black/5 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)]">
        <Editor initialData={data} />
      </div>
    </>
  );
}
