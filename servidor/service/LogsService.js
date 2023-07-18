'use strict';
var db = require('../database');
var express = require("express");
var mysql = require('mysql');
var app = express();
var bp = require('body-parser');
const cors = require('cors');

var conn = db.connection;


/**
 * Obtener todas las acciones realizadas por los usuarios en el sistema
 * Obtener todas las acciones realizadas por los usuarios en el sistema
 *
 * returns GetListaLogs
 **/
exports.getListaLogs = function() {
  return new Promise(function(resolve, reject) {
    conn.query('SELECT * FROM logs', function(err, rows) {
      if (err) {
        console.log('Error en GET /logs '+err);
        reject(err);
      }
      else {
        console.log('GET en /logs realizado');
        resolve(rows);
      } 
    });
  });
}

exports.postLogs = function(body) {
  return new Promise(function(resolve, reject) {
    let query = `INSERT INTO logs (idlogs, tipo, idUsuarios, accion, descripcion , fecha)
                  VALUES ('${body.idlogs}','${body.tipo}','${body.idUsuario}','${body.accion}','${body.descripcion}','${body.fecha}')`;

// Parte de conexion con la query necesaria
    conn.query(query, function(err, rows){
      if (err) {
        console.log('Error en /valoracion '+err);
        reject(err);
      }
      else {
        console.log(`log con id '${body.idLogs}' ha sido insertado`);
        resolve(rows[0]);
      }
    })
  });
}

