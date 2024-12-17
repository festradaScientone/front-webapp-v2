async function qrCodeService(instance, token) {
    const api = process.env.NEXT_PUBLIC_API_PROVEEDOR;
    const image = `${api}${instance}/instance/qr?token=${token}`;
  
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
  
    try {
      const response = await fetch(image, requestOptions);
      if (response.ok) {              
          const arrayBuffer = await response.arrayBuffer();
          
          const base64 = btoa(
            new Uint8Array(arrayBuffer).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          return { img: base64 }; 
          console.log(base64);
          /* if (base64 == 'eyJlcnJvciI6Imluc3RhbmNlICBzdGF0dXMgaXMgbm90IGVxdWFsIFwicXJcIiJ9') {
              return false;
          }else{
              return { img: base64 };
          }     */       
       
      } else {
        console.error("Error al obtener el código QR:", response.statusText);
        return null;
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      return null;
    }
  }
  
  export { qrCodeService };
  