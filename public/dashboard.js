//formulas fetch

// Fetch para obtener el stock y actualizar el elemento con id "dataDisplay"
fetch('/getStock') // Asegúrate de que esta ruta coincida con la ruta correcta
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const h3Element = document.getElementById('dataDisplay');
        console.log(data.stock); // Asegúrate de que 'stock' es el nombre correcto
        h3Element.innerText = data.stock; // Actualiza el contenido del elemento con el stock
    })
    .catch(error => console.error('Fetch error:', error));

    //proceso fetch para chart.js
    fetch('/graficOne') // Asegúrate de que esta ruta coincida con la ruta correcta
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        
        const h3Element = document.getElementById('dataDisplay'); //PONER ID GRAFICO CHART.JS

        console.log(data.stock); // Asegúrate de que 'stock' es el nombre correcto
        h3Element.innerText = data.stock; // Actualiza el contenido del elemento con el stock
    })
    .catch(error => console.error('Fetch error:', error));
