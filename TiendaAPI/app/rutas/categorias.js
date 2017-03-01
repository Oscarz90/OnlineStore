"use strict";
var CategoriasControlador = require('../controladores/categorias');
var ResponseParser = require('../middleware/response-parser')

module.exports = router=>{
  
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