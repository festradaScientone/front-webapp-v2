const postUpdateStatusInstance = async (instanceStatus, instanceId, token) => {
  const baseURL = `${process.env.NEXT_PUBLIC_API}/Stage/updateinstancestatus`;

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify({
      instanceStatus: instanceStatus,
      instanceId: instanceId.replace("instance", ""),
    }),
  };

  try {
    const response = await fetch(baseURL, requestOptions);
    return response.json();
  } catch (error) {
    console.error("Error al Update Status Instance:", error);
    return null;
  }
};

export { postUpdateStatusInstance };
