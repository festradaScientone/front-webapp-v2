"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function Page() {
  const router = useRouter();
  const [cardData, setCardData] = useState({
    nameOnCard: "",
    expirationDate: "",
    cardNumber: "",
    cvvCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isFormComplete = Object.values(cardData).every(
    (value) => value.trim() !== ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Create a loader");
    console.log(cardData);
    router.push("/thanks-payment");
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#f5f8ff] font-['adelle-sans']">
      <Header />
      <main className="m-auto text-center grid gap-8 pb-16 max-w-5xl">
        <div className="flex justify-center items-center max-w-5xl">
          <div className="bg-white shadow-lg rounded-lg p-8 text-left w-full">
            <p className="text-[#2c5ef9] mb-1 font-semibold">One more step</p>
            <h1 className="text-3xl font-black mb-2 text-[#001238] font-[Adelle]">
              Add Payment Details
            </h1>

            <form
              onSubmit={handleSubmit}
              className="max-w-5xl min-w-[50rem] mx-auto my-8"
            >
              <div className="flex gap-4 mb-6">
                <div className="w-1/2">
                  <label className="block text-[#001238] font-bold">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    name="nameOnCard"
                    placeholder="e.g. John Doe"
                    value={cardData.nameOnCard}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md bg-[#f5f8ff] font-semibold focus:outline-none focus:ring-2 focus:ring-[#2c5ef9]"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-[#001238] font-bold">
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    name="expirationDate"
                    placeholder="YY/MM"
                    value={cardData.expirationDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md bg-[#f5f8ff] font-semibold focus:outline-none focus:ring-2 focus:ring-[#2c5ef9]"
                  />
                </div>
              </div>
              <div className="flex gap-4 mb-4">
                <div className="w-1/2">
                  <label className="block text-[#001238] font-bold">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    value={cardData.cardNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md bg-[#f5f8ff] font-semibold focus:outline-none focus:ring-2 focus:ring-[#2c5ef9]"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-[#001238] font-bold">
                    CVV Code
                  </label>
                  <input
                    type="text"
                    name="cvvCode"
                    placeholder="123"
                    value={cardData.cvvCode}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md bg-[#f5f8ff] font-semibold focus:outline-none focus:ring-2 focus:ring-[#2c5ef9]"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  disabled={!isFormComplete}
                  className={`text-[#001238] font-bold px-8 py-3 rounded-lg transition-colors
                        ${
                          isFormComplete
                            ? "bg-[#d6f898] hover:bg-[#c0f75a] "
                            : "bg-gray-200 text-gray-500 cursor-not-allowed"
                        }`}
                >
                  Activate Your Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
