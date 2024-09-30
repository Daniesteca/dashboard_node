const express = require('express');
const router = express.Router();
const conexion = require('../database/db');



// Vista principal, siempre renderiza la página del dash
const vistaPrincipal = async (req, res) => {
    try {
        const [articulosResults] = await conexion.promise().query('SELECT * FROM articulos');

        // Renderiza siempre la página con los datos de articulosResults
        res.render('home', { articulos: articulosResults });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la base de datos');
    }
};

const vistaTables = (req, res)=>{
    res.render('tables')
}

const vistaNotifications = (req, res)=>{
    res.render('notifications')
}

const vistaArticulos = (req, res)=>{
    conexion.query('SELECT * FROM articulos',(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('listArticulos',{results:results});
        }
    })         
}

const vistaChartJs = (req, res)=>{
    res.render('chart')
}

// Nueva ruta para la consulta de stock, se usa para fetch-------------------------------------------|
const obtenerStock = async (req, res) => {
    try {
        const [totalesArticulosResults] = await conexion.promise().query('SELECT * FROM totales_articulos');

        const stock = totalesArticulosResults[0]?.stock; // Asegúrate de que 'stock' es el campo correcto
        res.json({ stock }); // Enviar el stock como JSON para el fetch en el frontend

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el stock');
    }
};

// const obtenerGrafic = async (req, res) => {
//     try {
//         const [articulosResults] = await conexion.promise().query('SELECT * FROM articulos');

//         const descripcion = articulosResults[0]?.descripcion;
//         const stock = articulosResults[0]?.stock; // Asegúrate de que 'stock' es el campo correcto
//         res.json({ descripcion, stock }); // Enviar el stock como JSON para el fetch en el frontend

//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error en la base de datos');
//     }
// };

const obtenerGrafic = async (req, res) => {
    try {
        const [articulosResults] = await conexion.promise().query('SELECT * FROM articulos');

        // Enviar todos los resultados de la consulta
        res.json(articulosResults); // Devuelve un array de artículos

    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la base de datos');
    }
};

module.exports={
    vistaPrincipal,
    vistaTables,
    vistaNotifications,
    vistaArticulos,
    vistaChartJs,
    obtenerStock,
    obtenerGrafic,
    
}