
import Cookies from "universal-cookie";
const cookies = new Cookies();
const tokeUser = cookies.get("tokeUser");

const postInsertHistoryInstance = async (
  statusInstance,
  instanceMe,
  id_place,
  token
) => {
  const baseURL = `${process.env.NEXT_PUBLIC_API}/Stage/insertinstancehistory`;

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify({
      idPlace: id_place,
      instanceMe: instanceMe,
      statusInstance: statusInstance,
    }),
  };

  try {
    const response = await fetch(baseURL, requestOptions);
    return await response.json();
  } catch (error) {
    console.error("Error al Update History Instance:", error);
    return null;
  }
};

export { postInsertHistoryInstance };
