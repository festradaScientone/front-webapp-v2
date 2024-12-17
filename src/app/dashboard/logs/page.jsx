import getData from "@/lib/data/data";
import { logService } from "@/services/data/getLogs";

export const metadata = {
  title: 'Logs',
};

export default async function Page() {

  const data = await getData();
  const logs = await logService(data.place_id, data.token_clerk);

  if (data.botStatus == "standby") {
      redirect("/sync-whatsapp");
    }

  function formatDate(dateTimeString) {
    // Crear un objeto Date a partir de la cadena de fecha y hora
    const date = new Date(dateTimeString);

    // Opciones para formatear la fecha
    const options = {
      month: "long", // Nombre completo del mes
      day: "numeric", // Día del mes
      year: "numeric", // Año
      hour: "numeric", // Hora
      minute: "2-digit", // Minutos
      hour12: true, // Formato de 12 horas (AM/PM)
    };

    // Formatear la fecha y la hora
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  }

  function formatDuration(start, end) {
    // Parse the start and end times
    const startTime = new Date(start);
    const endTime = new Date(end);
  
    // Calculate the difference in milliseconds
    const diffMs = endTime - startTime;
  
    // Convert the difference to hours, minutes, and seconds
    const diffSeconds = Math.floor(diffMs / 1000);
    const hours = Math.floor(diffSeconds / 3600);
    const minutes = Math.floor((diffSeconds % 3600) / 60);
    const seconds = diffSeconds % 60;
  
    // Build the result string
    let result = '';
    if (hours > 0) {
      result += `${hours} hours `;
    }
    if (minutes > 0) {
      result += `${minutes} mins `;
    }
    if (seconds > 0 || result === '') { // Always show seconds if no other units are present
      result += `${seconds} seconds`;
    }
  
    return result.trim();
  }

  return (
    <>
      <div className="flex-grow justify-center px-6 py-12 lg:px-8 sm:max-w-7xl sm:mx-auto sm:w-full">
        <h1 className="text-[#130e4b] font-extrabold text-2xl">
        Activity Logs
        </h1>
        <div className="py-4">
          <table className="table-fixed border-collapse border border-[#dadce3] w-full">
            <thead className="border-b border-[#2c5ef9]">
              <tr className="bg-[#f9f9fb] text-[#2e286c]">
                <th className="py-4 bg-[#2c5ef9] text-white">Activation Phone</th>
                <th className="py-4 bg-[#2c5ef9] text-white">Platform</th>
                <th className="py-4 bg-[#2c5ef9] text-white">Date and Time</th>
                <th className="py-4 bg-[#2c5ef9] text-white">Time</th>
              </tr>
            </thead>
            {logs && (
              <tbody className="text-center">
                {logs.map((log) => {
                  const meInstance = JSON.parse(log["me_instance"]["S"]);  

                  return(
                    <tr
                      className="border-b border-[#dadce3] text-[#001238]"
                      key={log["id_history"]["S"]}
                    >
                      <td className="py-3 text-sm font-semibold text-[#001238]">
                        {meInstance['id'] ? meInstance['id'].replace('@c.us','') : 'Not found' }
                      </td>
                      <td className="py-3 text-sm font-semibold text-[#001238] capitalize">
                      {meInstance['device']['platform'] == "smbi" ? "IOS" : meInstance['device']['platform'] }
                      </td>
                      <td className="py-3 text-sm font-semibold text-[#001238]">
                      {formatDate(log["time_action"]["S"])}
                      </td>
                      <td className="py-3 text-sm font-semibold text-[#001238]">
                      { log["time_action_end"]["S"] === "__NULL__" ? t('Active') : formatDuration(log["time_action"]["S"], log["time_action_end"]["S"]) }
                      </td>
                    </tr>
                    )
                  })}
              </tbody>
            )}            
          </table>
          
        </div>
      </div>
    </>
  );
}
