'use strict';
var db = require('../database');
var express = require("express");
var mysql = require('mysql');
var app = express();
var bp = require('body-parser');
const cors = require('cors');
const crypto = require("crypto");
//const rid = crypto.randomBytes(16).toString("hex");

var conn = db.connection;


/**
 * Eliminar un destino
 * Eliminar un destino
 *
 * id String ID del destino
 * returns Destino
 **/
exports.deleteDestino = function(id) {
  return new Promise(function(resolve, reject) {
    let query = `delete * from destinos where idDestinos='${id}'`;
     
  
      // Parte de conexion con la query necesaria
      conn.query(query, function(err, rows){
        if (err) {
          console.log('Error en /destinos '+err);
          reject(err);
        }
        else {
          console.log(`Destino con id='${id}' ha sido eliminado`);
          resolve(rows[0]);
        }
      })
    });
}


/**
 * Obtener destino por ID
 * Obtener destino por ID
 *
 * id String ID del destino
 * returns Destino
 **/
exports.getDestino = function(id) {
  return new Promise(function(resolve, reject) {
    // Filtrar por si pasa id o no
    let query = '';
    if(id){
      query = `select * from destinos where idDestinos='${id}'`;
    }else{
      query = 'select * from destinos';
    }

    // Parte de conexion con la query necesaria
    conn.query(query, function(err, rows){
      if (err) {
        console.log('Error en /destinos '+err);
        reject(err);
      }
      else {
        console.log('GET en /destinos realizado');
        resolve(rows[0]);
      }
    })

  });
}


/**
 * Obtener todos los destinos
 * Obtener todos los destinos
 *
 * returns GetListaDestinos
 **/
exports.getListaDestinos = function() {
  return new Promise(function(resolve, reject) {
    conn.query('SELECT * FROM destinos', function(err, rows) {
      if (err) {
        console.log('Error en GET /destinos '+err);
        reject(err);
      }
      else {
        console.log('GET en /destino realizado');
        resolve(rows);
      } 
    });
  });
}


/**
 * Crear un nuevo destino
 * Crear un nuevo destino
 *
 * body Destino Destino creado
 * returns Destino
 **/
exports.postDestino = function(body) {
  return new Promise(function(resolve, reject) {
    let query = `INSERT INTO destinos (idDestinos, nombre, descripcion, localizacion, categoria , precio , imagen , Dia , Hora, coordenadas)
                  VALUES ('${body.idDestinos}','${body.nombre}','${body.descripcion}','${body.localizacion}','${body.categoria}','${body.precio}','${body.imagen}','${body.Dia}','${body.Hora}',ST_PointFromText(${body.coordenadas}))`;

// Parte de conexion con la query necesaria
    conn.query(query, function(err, rows){
      if (err) {
        console.log('Error en /destinos '+err);
        reject(err);
      }
      else {
        console.log(`destino con nombre '${body.nombre}' ha sido insertado`);
        resolve(rows[0]);
      }
    })
  });
}


/**
 * Editar destino existente
 * Editar destino existente
 *
 * body Destino Destino actualizado
 * id String ID del destino
 * returns Destino
 **/
exports.putDestino = function(body,id) {
  return new Promise(function(resolve, reject) {

    let query = `UPDATE destinos SET nombre= '${body.nombre}', descripcion = '${body.descripcion}', localizacion = '${body.localizacion}', categoria = '${body.categoria}',precio = '${body.precio}', imagen = '${body.imagen}' , Dia = '${body.Dia}', Hora = '${body.Hora}'
                  WHERE idDestinos = '${id}'`;

    // Parte de conexion con la query necesaria
    conn.query(query, function(err, rows){
      if (err) {
        console.log('Error en /destino '+err);
        reject(err);
      }
      else {
        console.log(`destino con nombre '${body.nombre}' ha sido modificado`);
        resolve(rows[0]);
      }
    })

  });
}

