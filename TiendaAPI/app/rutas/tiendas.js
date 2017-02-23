var tiendasControlador = require('../controladores/tiendas');
var ResponseParser = require('../middleware/response-parser')

var rutasTiendas = function(router){
  'use strict';
  const baseURI = 'tiendas';
  
  router.route('/')
    .get([
      tiendasControlador.findAll
      , ResponseParser
    ])
    .post(tiendasControlador.save);

  router.route('/:idTienda')
    .get(tiendasControlador.findOne);

  return baseURI;
};

//Exportacion del modulo como funcion
module.exports = rutasTiendas;