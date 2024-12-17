async function botDataService(idBot, token) {
    const api = process.env.NEXT_PUBLIC_API;
    const url = `${api}/Stage/getassistentinfo?idAssistant=${idBot}`;
  
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: token },
    };
  
    try {
      const response = await fetch(url, requestOptions);
      return await response.json();
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      return null;
    }
  }
  
  export { botDataService };
  