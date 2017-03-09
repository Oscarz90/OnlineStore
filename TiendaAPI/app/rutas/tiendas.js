var TiendasControlador = require('../controladores/tiendas');
var ResponseParser = require('../middleware/response-parser')

module.exports = router=>{
  'use strict';
  const baseURI = 'tiendas';

  /**
   * .../tiendas/
   */
  router.route('/')
    .post([
      TiendasControlador.insertOne
      , ResponseParser
    ]);

  /**
   * .../tiendas/:idTienda
   */
  router.route('/:idTienda')
    .get([
      TiendasControlador.findOne
      , ResponseParser
    ])
    .put([
      TiendasControlador.updateOne
      , ResponseParser
    ]);

  return baseURI;
};