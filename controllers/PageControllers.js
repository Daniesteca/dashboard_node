const express = require('express');
const router = express.Router();
const conexion = require('../database/db');
const mysql = require('mysql2');

// const vistaPrincipal = (req, res)=>{
//     conexion.query('SELECT * FROM articulos',(error, results)=>{
//         if(error){
//             throw error;
//         }else{
//             res.render('home',{results:results});
//         }
//     }) 
//     // res.render('home')
// }

const vistaPrincipal = async (req, res) => {
    try {
        // Ejecuta las dos consultas de forma concurrente
        const [articulosResults, totalesArticulosResults] = await Promise.all([
            conexion.query('SELECT * FROM articulos'),
            conexion.query('SELECT * FROM totales_articulos')
        ]);

        // Pasa los resultados a la vista
        res.render('home', { articulos: articulosResults[0], totalesArticulos: totalesArticulosResults[0] });
    } catch (error) {
        // Manejo de errores
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



// const totalStock = (req, res)=>{
//     conexion.query('SELECT SUM(stock) total_stock',(error, results)=>{
//         if(error){
//             throw error;
//         }else{
//             res.render('home',{results:results});
//         }
//     })
// }


// const totalStock = (req, res)=>{
//     conexion.query('select * from totales_articulos',(error, results)=>{
//         if(error){
//             throw error;
//         }else{
//             console.log(results);
//             console.log(JSON.stringify(results, null, 2));
//             res.json(results[0]);
//         }
//     })
// }


module.exports={
    vistaPrincipal,
    vistaTables,
    vistaNotifications,
    vistaArticulos,
    // totalStock
}