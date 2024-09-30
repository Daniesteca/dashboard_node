const express = require('express')
const {vistaPrincipal,vistaNotifications,vistaTables,vistaArticulos} = require('../controllers/PageControllers')
const router = express.Router()
const conexion = require('../database/db');

router.get('/',vistaPrincipal)

// routes.js
// router.get('/', async (req, res) => {
//     try {
//         // Ejecuta las dos consultas de forma concurrente
//         const [articulosResults, totalesArticulosResults] = await Promise.all([
//             conexion.query('SELECT * FROM articulos'),
//             conexion.query('SELECT * FROM totales_articulos')
//         ]);

//         // Pasa los resultados a la vista
//         res.render('home', { articulos: articulosResults[0], totalesArticulos: totalesArticulosResults[0] });
//     } catch (error) {
//         // Manejo de errores
//         console.error(error);
//         res.status(500).send('Error en la base de datos');
//     }
// });

router.get('/tables',vistaTables)
router.get('/notifications',vistaNotifications)
router.get('/listArticulos',vistaArticulos)


module.exports={routes:router}