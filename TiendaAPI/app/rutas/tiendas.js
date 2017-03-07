var TiendasControlador = require('../controladores/tiendas');
var ResponseParser = require('../middleware/response-parser')

module.exports = router=>{
  'use strict';
  const baseURI = 'tiendas';
  
  router.route('/')
    .get([
      TiendasControlador.find
      , ResponseParser
    ])
    .post(TiendasControlador.insertOne);

  router.route('/:idTienda')
    .get([
      TiendasControlador.findById
      , ResponseParser]);

  return baseURI;
};