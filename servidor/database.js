var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'triptourdb'
});
/*
connection.connect(function(err){
    if(err) throw err;
    console.log("Conexion realizada");
})
*/
function getUsuarios() {
    connection.query('SELECT * FROM usuarios', function(error, results) {
        if (error) {
            throw error;
        } else {
            results.forEach(result =>{
                console.log(result);
            });
        }
    });
}
//connection.connect();
module.exports = { connection , getUsuarios };