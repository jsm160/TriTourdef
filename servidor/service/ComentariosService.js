'use strict';
var db = require('../database');
var express = require("express");
var mysql = require('mysql');
var app = express();
var bp = require('body-parser');
const cors = require('cors');

var conn = db.connection;


/**
 * Añadir un comentario
 * Añadir un comentario
 *
 * body Comentarios Comentario añadido
 * returns Comentarios
 **/
exports.postComentario = function(body) {
  return new Promise(function(resolve, reject) {
    let query = `INSERT INTO comentarios (idComentarios, idUsuario, mensaje, fecha, idRutas , valoracion)
                  VALUES ('${body.idComentarios}','${body.idUsuario}','${body.mensaje}','${body.fecha}','${body.idRuta}','${body.valoracion}')`;

// Parte de conexion con la query necesaria
    conn.query(query, function(err, rows){
      if (err) {
        console.log('Error en /valoracion '+err);
        reject(err);
      }
      else {
        console.log(`valoracion con id '${body.idComentarios}' ha sido insertado`);
        resolve(rows[0]);
      }
    })
  });
}

