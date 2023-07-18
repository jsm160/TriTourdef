'use strict';

var utils = require('../utils/writer.js');
var Usuario = require('../service/UsuarioService');

module.exports.deleteUsuario = function deleteUsuario (req, res, next, id) {
  Usuario.deleteUsuario(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getListaUsuarios = function getListaUsuarios (req, res, next) {
  Usuario.getListaUsuarios()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUsuario = function getUsuario (req, res, next, id) {
  Usuario.getUsuario(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postUsuario = function postUsuario (req, res, next, body) {
  Usuario.postUsuario(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putUsuario = function putUsuario (req, res, next, body, id) {
  Usuario.putUsuario(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
