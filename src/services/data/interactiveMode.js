async function interactModeService(instanceId, modeChat, token) {
    const onlyNumber = instanceId.match(/\d+/g);
    const apiUrlBase = process.env.NEXT_PUBLIC_API;
    const modeUrl = `${apiUrlBase}/Stage/settmodechat`;
  
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify({ 'instanceId': onlyNumber[0], "mode": modeChat }),
    };
  
    try {
      const response = await fetch(modeUrl, requestOptions);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      throw new Error("Error al iniciar sesión");
    }
  }
  
  export { interactModeService };
  