const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Toor*963.',
    database:'charts'
})

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es : '+error);
        return
    }
    console.log('¡Conectado a la BD Mysql!');
})

module.exports = conexion;