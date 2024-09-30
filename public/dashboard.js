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

    // //proceso fetch para chart.js

    fetch('/graficOne')
        .then(response =>  {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(datos => mostrar(datos))
        .catch(error => console.log(error))

        const mostrar = (articulos) =>{
            articulos.forEach(element => {
                myChart.data['labels'].push(element.descripcion)
                myChart.data['datasets'][0].data.push(element.stock)
            });
            console.log(myChart)
        }

