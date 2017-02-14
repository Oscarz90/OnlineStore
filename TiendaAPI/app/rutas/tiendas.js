var rutasTiendas = function(router){
  'use strict';

  router.route('/')
    .get(function(peticion, respuesta){
      console.info("Llamaste GET tiendas/");
    });

  router.route('/:idTienda')
    .get(function(peticion, respuesta){
      console.info("Llamaste GET tiendas/:idTienda");
    });

};

//Exportacion del modulo como funcion
module.exports = rutasTiendas;