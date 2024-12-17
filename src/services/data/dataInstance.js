async function getInstanceData (instance, token) { 
    const api = process.env.NEXT_PUBLIC_API_PROVEEDOR;
    const url = `${api}/${instance}/instance/me?token=${token}`; 
   
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
    };

    try {
        const response = await fetch(url, requestOptions);        
        return await response.json();                        
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        return null
    }
}

export { getInstanceData }