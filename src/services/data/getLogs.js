async function logService (id_place, token) {  
    const apiUrlBase = process.env.NEXT_PUBLIC_API;
    const dataUrl = `${apiUrlBase}/Stage/getinstancehistory?id_place=${id_place}`; 
    
    const requestOptions = {
        method: 'GET',
        headers: { "Content-Type": "application/json", Authorization: token },
    };

    try {
        const response = await fetch(dataUrl, requestOptions);        
        const data = await response.json();               
        return data
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
        throw new Error("Error al obtener el estado del bot");
    }
}

export { logService }