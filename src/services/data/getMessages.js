async function getMessagesTotal (instance_id, token) {
    const apiUrlBase = process.env.NEXT_PUBLIC_API_PROVEEDOR;
    const loginUrl = `${apiUrlBase}/${instance_id}/messages/statistics?token=${token}`; 
    
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        const response = await fetch(loginUrl, requestOptions);
        const data = await response.json();
        return  data;
    } catch (error) { 
        console.error('Error al realizar la solicitud:', error);
        throw new Error('Error al iniciar sesión');
    }
}

export { getMessagesTotal }