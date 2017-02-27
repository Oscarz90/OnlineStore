"use strict";
var CategoriasControlador = require('../controladores/categorias');
var ResponseParser = require('../middleware/response-parser')

var rutasTiendas = function(router){
  
  const baseURI = 'tiendas/{idTienda}/categorias';
  
  router.route('/')
    .get([
      CategoriasControlador.find
      , ResponseParser])
    .post(CategoriasControlador.insert);

  router.route('/:idCategoria')
    .get([
      CategoriasControlador.findOne
      , ResponseParser]);

  return baseURI;
};

//Exportacion del modulo como funcion
module.exports = rutasTiendas;