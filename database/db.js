const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Toor*963.',
    database:'charts'
})
// Confirmar la conexión
pool.getConnection((error, connection) => {
    if (error) {
        console.error('El error de conexión es: ' + error);
        return;
    }
    console.log('¡Conectado a la BD MySQL!');

    // Liberar la conexión de vuelta al pool
    connection.release();
});

module.exports = pool;
