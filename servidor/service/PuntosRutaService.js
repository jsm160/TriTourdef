'use strict';
var db = require('../database');
var express = require("express");
var mysql = require('mysql');
var app = express();
var bp = require('body-parser');
const cors = require('cors');

var conn = db.connection;

/**
 * Eliminar un destino de una ruta
 * Eliminar un destino de una ruta
 *
 * id String ID de la ruta
 * returns PuntosRuta
 **/
exports.deletePuntosRuta = function(id) {
  return new Promise(function(resolve, reject) {
    let query = `delete * from puntosruta where idPuntosRuta='${id}'`;
     
  
      // Parte de conexion con la query necesaria
      conn.query(query, function(err, rows){
        if (err) {
          console.log('Error en /puntoruta '+err);
          reject(err);
        }
        else {
          console.log(`PuntoRuta con id='${id}' ha sido eliminado`);
          resolve(rows[0]);
        }
      })
    });
}


/**
 * Obtener todos los destinos de todas las rutas
 * Obtener todos los destinos de todas las rutas
 *
 * returns GetListaPuntosRuta
 **/
exports.getListaPuntosRutas = function() {
  return new Promise(function(resolve, reject) {
    conn.query('SELECT * FROM puntosruta', function(err, rows) {
      if (err) {
        console.log('Error en GET /puntosruta '+err);
        reject(err);
      }
      else {
        console.log('GET en /puntosruta realizado');
        resolve(rows[0]);
      } 
    });
  });
}


/**
 * Obtener todos los destinos de una ruta específica
 * Obtener todos los destinos de una ruta específica
 *
 * ruta_id String ID de la ruta
 * returns GetListaPuntosRuta
 **/
exports.getPuntosRuta = function(ruta_id) {
  return new Promise(function(resolve, reject) {
    // Filtrar por si pasa id o no
    let query = '';
    if(ruta_id){
      query = `select * from puntosruta where idPuntosRuta='${ruta_id}'`;
    }else{
      query = 'select * from idPuntosRuta';
    }

    // Parte de conexion con la query necesaria
    conn.query(query, function(err, rows){
      if (err) {
        console.log('Error en /puntosruta '+err);
        reject(err);
      }
      else {
        console.log('GET en /puntosruta realizado');
        resolve(rows[0]);
      }
    })

  });
}


/**
 * Añadir un punto de ruta
 * Añadir un punto de ruta
 *
 * body PuntosRuta PuntoRuta Creado
 * returns PuntosRuta
 **/
exports.postPuntosRuta = function(body) {
  return new Promise(function(resolve, reject) {
    let query = `INSERT INTO puntosruta (idPuntosRuta, idRuta, idDestino)
                  VALUES ('${body.idPuntosRuta}','${body.idRuta}','${body.idDestino}')`;

// Parte de conexion con la query necesaria
    conn.query(query, function(err, rows){
      if (err) {
        console.log('Error en /puntosrutas '+err);
        reject(err);
      }
      else {
        console.log(`puntosruta con idPuntosRuta '${body.idPuntosRuta}' ha sido insertada`);
        resolve(rows[0]);
      }
    })
  });
}

