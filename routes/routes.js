const express = require('express')
const {vistaPrincipal,vistaNotifications,vistaTables} = require('../controllers/PageControllers')

const router = express.Router()

router.get('/',vistaPrincipal)
router.get('/tables',vistaTables)
router.get('/notifications',vistaNotifications)

module.exports={routes:router}