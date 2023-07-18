
'use strict';
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var mysql = require('mysql');
var oas3Tools = require('oas3-tools');
var serverPort = 8080 ;
var connection = require('./database');
var cors = require('cors');
var bp = require('body-parser');
const app=express()
// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
const openApiApp = expressAppConfig.getApp();

app.use(/.*/, cors());
for (let i = 2; i < openApiApp._router.stack.length; i++) {
    app._router.stack.push(openApiApp._router.stack[i])
}



// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function (req, res) {

    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});


