async function getChats(name_space, token) {
    const apiUrlBase = process.env.NEXT_PUBLIC_API
    const fetchData = `${apiUrlBase}/Stage/getmessagesbot?name_space=${name_space}`;
    
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: token }      
    };
  
    try {
      const response = await fetch(fetchData, requestOptions);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      throw new Error("Error al traer los chats");
    }
  }
  
  export { getChats };
  