'use strict';

var utils = require('../utils/writer.js');
var Ruta = require('../service/RutaService');

module.exports.deleteRuta = function deleteRuta (req, res, next, id) {
  Ruta.deleteRuta(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getListaRutas = function getListaRutas (req, res, next) {
  Ruta.getListaRutas()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRuta = function getRuta (req, res, next, id) {
  Ruta.getRuta(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.postRuta = function postRuta (req, res, next, body) {
  Ruta.postRuta(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putRuta = function putRuta (req, res, next, body, id) {
  Ruta.putRuta(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
