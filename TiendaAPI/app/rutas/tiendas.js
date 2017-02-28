var TiendasControlador = require('../controladores/tiendas');
var ResponseParser = require('../middleware/response-parser')

var rutasTiendas = function(router){
  'use strict';
  const baseURI = 'tiendas';
  
  router.route('/')
    .get([
      TiendasControlador.find
      , ResponseParser
    ])
    .post(TiendasControlador.insert);

  router.route('/:idTienda')
    .get([
      TiendasControlador.findById
      , ResponseParser]);

  return baseURI;
};

//Exportacion del modulo como funcion
module.exports = rutasTiendas;