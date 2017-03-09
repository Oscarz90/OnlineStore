var SeccionesControlador = require('../controladores/secciones');
var ResponseParser = require('../middleware/response-parser')

module.exports = router=>{
  'use strict';
  const baseURI = 'secciones';

  /**
   * .../secciones/
   */
  router.route('/')
    .get([SeccionesControlador.find
      , ResponseParser])
    .post([
      SeccionesControlador.insertOne
      , ResponseParser
    ]);

  /**
   * .../secciones/:idSeccion
   */
  router.route('/:idSeccion')
    .get([
      SeccionesControlador.findOne
      , ResponseParser
    ])
    .put([
      SeccionesControlador.updateOne
      , ResponseParser
    ]);

  return baseURI;
};