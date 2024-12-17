async function getInfoUser(userId, token) {  
    const apiUrlBase = process.env.NEXT_PUBLIC_API;
    const dataUrl = `${apiUrlBase}/Stage/getservicesplace`;
  
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify({ userId: userId }),
    };
    
    try {
      const response = await fetch(dataUrl, requestOptions);
      const data = await response.json();
      const dataToParse = data[1] ? data[1] : data[0];
      const result = dataToParse;
      return result;
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      throw new Error("Error al iniciar sesión");
    }
  }
  
  export { getInfoUser };
  