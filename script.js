const consultarDatos = async () => {
  try {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    datos.forEach((element, index) => {
      if (index < 20) {
        console.log(element.title);  
      }
    });
  
  } catch (error) {
    console.log('Error al consultar los datos:', error);
  }
};

const enviarInformacion = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Información Enviada");
    }, 3000);
  });
};

const mostrarMensaje = async () => {
  try {
    const mensaje = await enviarInformacion();
    console.log(mensaje);
  } catch (error) {
    console.log('Error al enviar la información:', error);
  }
};

consultarDatos();
mostrarMensaje();
