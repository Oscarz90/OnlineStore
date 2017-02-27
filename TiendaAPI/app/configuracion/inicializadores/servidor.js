var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var methodOverride = require('method-override');

//var app = express();

var app;

var servidor = function(callback){
  'use strict';
  //Inicializa aplicacion
  app = express();
  
  //Middleware para parser peticiones json
  app.use(bodyParser.json({type: '*/*'}));

  //Generador de rutas
  require('../../rutas/generadorRutas')(app);

  //Puerto de recepcion del API
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000 :D!!!!");
  });

  //Retornamos el callback para async
  if(callback){
    return callback(null,"Se ejecuto correctamente el modulo ./app/configuracion/servidor")
  };
};

module.exports = servidor;

