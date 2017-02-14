var changeCase = require('change-case');
var express = require('express');
var rutas = require('require-dir')();

module.exports = function(app) {
  'use strict';
  
  // Initialize all rutas
  Object.keys(rutas).forEach(function(nombreRutas) {
    var router = express.Router();

    //Aqui podemos añadir algun middleware
    //router.use(algunMiddleware)
    
    //Inicializa la ruta para agregarl su funcionalidad al router
    require('./' + nombreRutas)(router);
    
    //Agrega el router a la ruta especifica en la aplicacion
    app.use('/' + changeCase.camelCase(nombreRutas), router);
  }); 
};

