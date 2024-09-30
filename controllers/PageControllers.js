const express = require('express');
const router = express.Router();
const conexion = require('../database/db');

const vistaPrincipal = (req, res)=>{
    res.render('home')
}

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



module.exports={
    vistaPrincipal,
    vistaTables,
    vistaNotifications,
    vistaArticulos
}