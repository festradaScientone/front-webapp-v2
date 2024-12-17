async function ChangeNumber(instanceId, token) {
  const api = process.env.NEXT_PUBLIC_API_PROVEEDOR;
  const url = `${api}${instanceId}/instance/logout?token=${token}`;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  try {
    const response = await fetch(url, requestOptions);
    return await response.json();
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
    return null;
  }
}

export { ChangeNumber };
