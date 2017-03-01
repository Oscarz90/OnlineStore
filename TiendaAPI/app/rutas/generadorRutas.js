var changeCase = require('change-case');
var express = require('express');
var rutas = require('require-dir')();

module.exports = app=>{
  'use strict';
  
  // Initialize all rutas
  Object.keys(rutas).map(nombreRutas=>{
    //Crear el conjunto de rutas
    let router = express.Router({mergeParams: true});

    //Aqui podemos añadir algun middleware
    //router.use(algunMiddleware)
    
    //Agrega el router a la ruta especifica en la aplicacion
    //app.use('/' + changeCase.camelCase(BASEURI), router);

    //Inicializa la ruta para agregarl su funcionalidad al router
    //let uriBase = require('./' + nombreRutas)(router);
    let uriBase = rutas[nombreRutas](router);
    //Agrega el router a la ruta especifica en la aplicacion
    app.use(`/${uriBase}`, router);
    //app.use('/' + changeCase.camelCase(nombreRutas), router);
  }); 
};

