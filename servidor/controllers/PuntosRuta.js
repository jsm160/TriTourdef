'use strict';

var utils = require('../utils/writer.js');
var PuntosRuta = require('../service/PuntosRutaService');

module.exports.deletePuntosRuta = function deletePuntosRuta (req, res, next, id) {
  PuntosRuta.deletePuntosRuta(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getListaPuntosRutas = function getListaPuntosRutas (req, res, next) {
  PuntosRuta.getListaPuntosRutas()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPuntosRuta = function getPuntosRuta (req, res, next, ruta_id) {
  PuntosRuta.getPuntosRuta(ruta_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postPuntosRuta = function postPuntosRuta (req, res, next, body) {
  PuntosRuta.postPuntosRuta(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
