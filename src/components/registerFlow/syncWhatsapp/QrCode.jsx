"use client";

import { useState, useEffect } from "react";
import { qrCodeService } from "@/services/data/qrCode";
import { StatusBot } from "@/services/data/statusInstance";
import { useRouter } from "next/navigation";
import { postUpdateStatusInstance } from "@/services/data/UpdateStatusInstance"; 
import { postInsertHistoryInstance } from "@/services/data/insertHistoryInstance";
import "@/styles/qrcode.css";

export default function QrCode({ initialQR, instance_id, token_instance, place_id, token_clerk }) {
  const [qrCode, setQrCode] = useState(initialQR);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Si el numero es multiplo de cinco llama al api de validacion
    const res = esMultiploDeCinco(timeLeft);
    if (res) {
      validationApi();
    }
  }, [timeLeft, isLoading]);

  useEffect(() => {
    // Si el tiempo llega a 0, llamar a la API para renovar QR
    if (timeLeft === 0) {
      const refreshQR = async () => {
        setIsLoading(true);
        try {
          const data = await qrCodeService(instance_id, token_instance);
          setQrCode(data.img);
          // Reiniciar el contador
          setTimeLeft(60);
        } catch (error) {
          console.error("Error refreshing QR", error);
        } finally {
          setIsLoading(false);
        }
      };

      refreshQR();
    }

    // Configurar intervalo para la cuenta regresiva
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    // Limpiar intervalo
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Formatear tiempo
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  function esMultiploDeCinco(numero) {
    return numero % 5 === 0;
  }

  const validationApi = async () => {
    try {
      const connectionStatus = await StatusBot(instance_id, token_instance);
      console.log(connectionStatus.status);
      if (connectionStatus.status == "loading") {
        // Si la conexión es exitosa
        setIsLoading(true);
        setIsChecking(true);
        // Continuar verificando la conexión mientras se redirige
        const finalConnectionCheck = setInterval(async () => {
          const finalStatus = await StatusBot(instance_id, token_instance);
          if (finalStatus.status == "authenticated") {
            clearInterval(finalConnectionCheck);
            await postUpdateStatusInstance(true, place_id.replace("instance", ""), token_clerk);
            await postInsertHistoryInstance("Active", instance_id, place_id.replace("instance", ""), token_clerk);
            router.push('/interaction')        
          }
        }, 2000); // Cada 2 segundos
      } 
    } catch (error) {
      console.error("Error checking QR status", error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <>
          <div className="content-center text-center h-80">
            <div className="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </>
      ) : (
        <img
          src={`data:image/png;base64,${qrCode}`}
          alt="QR Code"
          width={300}
          height={300}
        />
      )}

      <p className="text-[#001238] text-center font-semibold py-6">
        {isChecking
          ? "Syncing. Keep WhatsApp Open in your Phone"
          : "This code will expire in"}
      </p>
      {!isChecking &&
      (
        <div className="text-center pt-4">
          <span className="bg-[#f5f8ff] text-2xl rounded-lg text-[#2c5ef9] font-bold px-12 py-3 text-center my-4 font-[Adelle]">
            {formatTime(timeLeft)}
          </span>
        </div>
      )}
    </div>
  );
}
