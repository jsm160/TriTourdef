'use strict';
var db = require('../database');
var express = require("express");
const { v4: uuidv4 } = require('uuid');
var mysql = require('mysql');
var app = express();
var bp = require('body-parser');
const cors = require('cors');
const crypto = require("crypto");
const rid = crypto.randomBytes(16).toString("hex");
const multer = require('multer');
const path = require('path');
var conn = db.connection;



// Use Multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
      callback(null, './uploads');
  },
  filename: (req, file, callback) => {
      const filename = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
      callback(null, filename);
  }
});

const upload = multer({ storage: storage});

 
/**
 * Eliminar una ruta
 * Eliminar una ruta
 *
 * id String ID de la ruta
 * returns Ruta
 **/
exports.deleteRuta = function(id) {
  return new Promise(function(resolve, reject) {
  let query = `delete from ruta where idRuta='${id}'`;
   

    // Parte de conexion con la query necesaria
    conn.query(query, function(err, rows){
      if (err) {
        console.log('Error en /ruta '+err);
        reject(err);
      }
      else {
        console.log(`Ruta con id='${id}' ha sido eliminada`);
        resolve(rows[0]);
      }
    })
  });
}


/**
 * Obtener todas las rutas
 * Obtener todas las rutas
 * dni delante detras , vida laboral(informe sitacion actual trabajador),firmar oferta
 * returns GetListaRutas
 **/
exports.getListaRutas = function() {
  return new Promise(function(resolve, reject) {
    let query = `select * from ruta`;
    conn.query(query, function(err, rows) {
      if (err) {
        console.log('Error en GET /ruta '+err);
        reject(err);
      }
      else {
        console.log('GET en /ruta realizado', query);
        resolve(rows);
      } 
    });
  });
}


/**
 * Obtener ruta por ID
 * Obtener ruta por ID
 *
 * id String ID de la ruta
 * returns Ruta
 **/
exports.getRuta = function(id) {
  return new Promise(function(resolve, reject) {
    // Filtrar por si pasa id o no
    let query = '';
    if(id){
      query = `select * from ruta where idRuta='${id}'`;
    }else{
      query = 'select * from ruta';
    }

    // Parte de conexion con la query necesaria
    conn.query(query, function(err, rows){
      if (err) {
        console.log('Error en /ruta '+err);
        reject(err);
      }
      else {
        console.log('GET en /ruta realizado');
        resolve(rows[0]);
      }
    })

  });
}



/**
 * Crear una nueva ruta
 * Crear una nueva ruta
 *
 * body Ruta Destino creado
 * returns Ruta
 **/
exports.postRuta = function(body) {
  return new Promise(function(resolve, reject) {
    //rid = crypto.randomBytes(16).toString("hex");
    let query = `INSERT INTO ruta (idRuta, nombre, descripcion, fecha_inicio, fecha_final , idAutor , imagen)
                  VALUES ('${crypto.randomBytes(16).toString("hex")}','${body.nombre}','${body.descripcion}','${body.fecha_inicio}','${body.fecha_final}','${123456}','${body.imagen}')`; //CAMBIAR

// Parte de conexion con la query necesaria
    conn.query(query, function(err, rows){
      if (err) {
        console.log('Error en /rutas '+err);
        reject(err);
      }
      else {
        console.log(`ruta con nombre '${body.nombre}' ha sido insertada`);
        resolve(rows[0]);
        
      }
    })
  });
}


/**
 * Editar ruta existente
 * Editar ruta existente
 *
 * body Ruta Ruta actualizada
 * id String ID de la ruta
 * returns Ruta
 **/
exports.putRuta = function(body,id) {
  return new Promise(function(resolve, reject) {

    let query = `UPDATE ruta
                  SET nombre= '${body.nombre}', descripcion = '${body.descripcion}', fecha_inicio = '${body.fecha_inicio}', fecha_final = '${body.fecha_final}',idAutor = '${body.idAutor}'
                  WHERE idRuta = '${id}'`;

    // Parte de conexion con la query necesaria
    conn.query(query, function(err, rows){
      if (err) {
        console.log('Error en /ruta '+err);
        reject(err);
      }
      else {
        console.log(`ruta con nombre '${body.nombre}' ha sido modificada`);
        resolve(rows[0]);
        rid = uuidv4();
      }
    })

  });
}

