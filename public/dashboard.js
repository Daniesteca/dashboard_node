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

    

//grafico de barras------------------------------------------------------------------|


const ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [], // Inicialmente vacío, se llenará con los nombres de los productos
        datasets: [{
            label: 'Stock de productos',
            data: [], // Inicialmente vacío, se llenará con los valores de stock
            backgroundColor: ['#c7b4fe'],
            borderColor: ['#925bf7'],
            borderWidth: 5
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Llamada fetch para obtener los datos del gráfico
fetch('/graficOne')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(datos => mostrar(datos)) // 'datos' ahora es un array de objetos
    .catch(error => console.log(error));

// Función para mostrar los datos en el gráfico
const mostrar = (articulos) => {
    articulos.forEach(element => {
        myChart.data.labels.push(element.descripcion); // Añadir la descripción como etiqueta
        myChart.data.datasets[0].data.push(element.stock); // Añadir el stock como dato
    });
    myChart.update(); // Actualiza el gráfico para reflejar los nuevos datos
    console.log(myChart);
};
