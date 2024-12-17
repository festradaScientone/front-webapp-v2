import Header from "@/components/Header";
export default async function Page() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-[#f5f8ff] font-['adelle-sans']">
        <Header />
        <main className="m-auto text-center pb-16 max-w-7xl">
          {/* <SelectionMode options={options} data={data} /> */}
          <div>
           <p className="text-[#001238] mb-1 font-semibold text-2xl">Wait until our team contacts you</p>
          </div>
        </main>
      </div>
    </>
  );
}
