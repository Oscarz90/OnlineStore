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
<<<<<<< HEAD
      TiendasControlador.findOne
      , ResponseParser
    ])
    .put([
      TiendasControlador.updateOne
      , ResponseParser
    ]);
=======
      TiendasControlador.findById
      , ResponseParser])
    .put([TiendasControlador.updateOne
      , ResponseParser])
    .patch([TiendasControlador.updatePatch
      , ResponseParser]);
>>>>>>> effccb83f4a3464d9d0b88bb97b9b23e7da8dc75

  return baseURI;
};