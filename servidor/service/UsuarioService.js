'use strict';
var db = require('../database');
const { v4: uuidv4 } = require('uuid');
var express = require("express");
var mysql = require('mysql');
var app = express();
var bp = require('body-parser');
const cors = require('cors');
app.use(cors());
app.options('*', cors());
app.use(bp.json());
var conn = db.connection;
const crypto = require("crypto");
const uid = crypto.randomBytes(16).toString("hex");
/**
 * Eliminar usuario existente
 * Eliminar usuario existente
 *
 * id String ID del usuario
 * returns Usuario
 **/
exports.deleteUsuario = function(id) {
  return new Promise(function(resolve, reject) {
  let query = `delete from usuarios where idUsuarios='${id}'`;
   

    // Parte de conexion con la query necesaria
    conn.query(query, function(err, rows){
      if (err) {
        console.log('Error en /usuario '+err);
        reject(err);
      }
      else {
        console.log(`Usuario con id='${id}' ha sido eliminado`);
        resolve(rows[0]);
      }
    })
  });
}


/**
 * Obtener todos los usuarios
 * Obtener todos los usuarios
 *
 * returns GetListaUsuarios
 **/
exports.getListaUsuarios = function() {
  return new Promise(function(resolve, reject) {
    conn.query('SELECT * FROM usuarios', function(err, rows) {
      if (err) {
        console.log('Error en GET /usuarios '+err);
        reject(err);
      }
      else {
        console.log('GET en /usuarios realizado');
        resolve(rows);
      } 
    });
  });
  
}


/**
 * Obtener todos los usuarios
 * Obtener todos los usuarios
 *
 * id String ID del usuario
 * returns Usuario
 **/
exports.getUsuario = function(id) {
  return new Promise(function(resolve, reject) {
      // Filtrar por si pasa id o no
      let query = '';
      if(id){
        query = `select idUsuarios, nombre_usuario,nombre , apellidos, contra, correo, rol, imagen from usuarios where idUsuarios='${id}'`;
      }else{
        query = 'select idUsuarios, nombre_usuario,nombre , apellidos, contra, correo, rol, imagen from usuarios';
      }
  
      // Parte de conexion con la query necesaria
      conn.query(query, function(err, rows){
        if (err) {
          console.log('Error en /usuario '+err);
          reject(err);
        }
        else {
          console.log('GET en /usuario realizado');
          resolve(rows[0]);
        }
      })
  
    });
}


/**
 * Crear un nuevo usuario
 * Crear un nuevo usuario
 *
 * body Usuario Usuario creado
 * returns Usuario
 **/
exports.postUsuario = function(body) {
  
  console.log(body);
  return new Promise(function(resolve, reject) {
   let query = `INSERT INTO usuarios (idUsuarios,nombre_usuario,nombre,apellidos,correo,contra,rol,fecha_nacimiento,imagen)
                  VALUES ('${crypto.randomBytes(16).toString("hex")}','${body.nombre_usuario}','${body.nombre}','${body.apellidos}','${body.correo}','${body.contra}','${body.rol}','${body.fecha_nacimiento}','${body.imagen}')`;

    
// Parte de conexion con la query necesaria
    conn.query(query, function(err, rows){
      if (err) {
        console.log('Error en /usuarios '+err);
        reject(err);
      }
      else {
        console.log(`usuario con nombre '${body.nombre}' ha sido insertado`);
        resolve(rows);
      }
    })
  });
}


/**
 * Editar usuario existente
 * Editar usuario existente
 *
 * body Usuario Usuario actualizado
 * id String ID del usuario
 * returns Usuario
 **/
exports.putUsuario = function(body,id) {
  return new Promise(function(resolve, reject) {

    let query = `UPDATE usuarios
                  SET nombre_usuario = '${body.nombre_usuario}', nombre= '${body.nombre}', apellidos = '${body.apellidos}', correo = '${body.correo}', contra = '${body.contra}', rol = '${body.rol}',imagen = '${body.imagen}'
                  WHERE idUsuarios = '${id}'`;

    // Parte de conexion con la query necesaria
    conn.query(query, function(err, rows){
      if (err) {
        console.log('Error en /usuarios '+err);
        reject(err);
      }
      else {
        console.log(`cliente con nombre '${body.nombre}' ha sido modificado`);
        resolve(rows[0]);
      }
    })

  });
}

