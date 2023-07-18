'use strict';

var utils = require('../utils/writer.js');
var Comentarios = require('../service/ComentariosService');

module.exports.postComentario = function postComentario (req, res, next, body) {
  Comentarios.postComentario(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
