const express = require('express')
const {vistaPrincipal,vistaNotifications,vistaTables,vistaArticulos} = require('../controllers/PageControllers')
const router = express.Router()
const conexion = require('../database/db');

router.get('/',vistaPrincipal)
router.get('/tables',vistaTables)
router.get('/notifications',vistaNotifications)
router.get('/listArticulos',vistaArticulos)


module.exports={routes:router}