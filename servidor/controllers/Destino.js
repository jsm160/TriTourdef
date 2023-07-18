'use strict';

var utils = require('../utils/writer.js');
var Destino = require('../service/DestinoService');

module.exports.deleteDestino = function deleteDestino (req, res, next, id) {
  Destino.deleteDestino(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDestino = function getDestino (req, res, next, id) {
  Destino.getDestino(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getListaDestinos = function getListaDestinos (req, res, next) {
  Destino.getListaDestinos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postDestino = function postDestino (req, res, next, body) {
  Destino.postDestino(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putDestino = function putDestino (req, res, next, body, id) {
  Destino.putDestino(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
