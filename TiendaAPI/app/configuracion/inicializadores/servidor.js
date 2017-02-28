"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var methodOverride = require('method-override');

const servidor = callback=>{
  
  //Inicializa aplicacion
  var app = express();
  
  //Middleware para parser peticiones json
  app.use(bodyParser.json({type: '*/*'}));
  
  //Generador de rutas
  require('../../rutas/generadorRutas')(app);

  //Puerto de recepcion del API
  app.listen(3000, function() {
    console.log("¡Node Server Running on http://localhost:3000!");
    callback(null,"Se inicio y configuro correctamente el servidor")
  });
};

module.exports = servidor;

