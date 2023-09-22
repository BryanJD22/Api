const apiKey = 'sZAlF7pHF7YDFSTf8VxYP232b5gme2A5T22NyGAk';
const sol = 1000; // El número de sol que deseas consultar
// URL del API de la NASA
const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${apiKey}`;

// Realizar una solicitud GET utilizando Fetch API
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error en la solicitud al API');
    }
    return response.json();
  })
  .then((data) => {
    // Los datos de las fotos se encuentran en el objeto 'data'
    console.log(data);
    //DIV donde meteremos los items.
    const contenedor = document.getElementById("container");
    // Aquí puedes procesar los datos o mostrar las imágenes en tu aplicación
    for(var i = 0; i < 50; i++){
        let item = document.createElement("div");
        item.classList.add('item');
        item.innerHTML = `
            <img src=${data.photos[i].img_src}>
            <div class="item_details">
                <p>Camera: ${data.photos[i].camera.full_name}</p>
                <p>Earth Date: ${data.photos[i].earth_date}</p>
            </div>
        `;
        contenedor.appendChild(item);
    }
  })
  .catch((error) => {
    console.error('Ocurrió un error:', error);
  });
