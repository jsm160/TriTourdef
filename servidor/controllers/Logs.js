'use strict';

var utils = require('../utils/writer.js');
var Logs = require('../service/LogsService');

module.exports.getListaLogs = function getListaLogs (req, res, next) {
  Logs.getListaLogs()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
    
};
module.exports.postLogs = function postLogs (req, res, next, body) {
  Logs.postLogs(body)
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};
