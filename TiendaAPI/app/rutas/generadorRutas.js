var changeCase = require('change-case');
var express = require('express');
var rutas = require('require-dir')();

module.exports = function(app) {
  'use strict';
  
  // Initialize all rutas
  Object.keys(rutas).forEach(function(nombreRutas) {
    //Crear el conjunto de rutas
    var router = express.Router({mergeParams: true});

    //Aqui podemos añadir algun middleware
    //router.use(algunMiddleware)
    
    //Inicializa la ruta para agregarl su funcionalidad al router
    var uriBase = require('./' + nombreRutas)(router);
    console.info(uriBase)
    console.info(`/${uriBase}`)
    //Agrega el router a la ruta especifica en la aplicacion
    app.use(`/${uriBase}`, router);
    //app.use('/' + changeCase.camelCase(nombreRutas), router);
  }); 
};

