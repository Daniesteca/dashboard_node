const express = require('express')

const {vistaPrincipal,vistaNotifications,vistaTables,vistaArticulos,obtenerStock} = require('../controllers/PageControllers')
const router = express.Router()
const conexion = require('../database/db');

//renderiza el dash
router.get('/',vistaPrincipal,);
//menu lateral
router.get('/tables',vistaTables)
router.get('/notifications',vistaNotifications)
router.get('/listArticulos',vistaArticulos)

// Rutas con fetch

//total stock
router.get('/getStock', obtenerStock);


module.exports={routes:router}