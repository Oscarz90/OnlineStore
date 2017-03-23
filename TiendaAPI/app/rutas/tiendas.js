var TiendasControlador = require('../controladores/tiendas');
var ResponseParser = require('../middleware/responseParser');
var ResponseErrorParser = require('../middleware/responseErrorParser');
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

  router.use(ResponseErrorParser);

  return baseURI;
};