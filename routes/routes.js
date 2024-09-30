const express = require('express')

const {vistaPrincipal,vistaNotifications,vistaTables,vistaArticulos,vistaChartJs,obtenerStock,obtenerGrafic} = require('../controllers/PageControllers')
const router = express.Router()
const conexion = require('../database/db');

//renderiza las vistas 
//el dash
router.get('/',vistaPrincipal,);
//menu lateral
router.get('/tables',vistaTables)
router.get('/notifications',vistaNotifications)
router.get('/listArticulos',vistaArticulos)
router.get('/chart',vistaChartJs)

// Rutas con fetch procesos

//total stock
router.get('/getStock', obtenerStock);

//grafico con chart.js
router.get('/graficOne', obtenerGrafic);


module.exports={routes:router}