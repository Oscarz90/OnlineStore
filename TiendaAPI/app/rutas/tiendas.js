var tiendasControlador = require('../controladores/tiendas');

var rutasTiendas = function(router){
  'use strict';
  const baseURI = 'tiendas';

  router.route('/')
    .get(
      [
        (req,resp, next)=>{
          console.log("Validador Datos"); 
          next();
        }
        , tiendasControlador.findAll
        ,(req,resp)=>{
          console.log("Armar Respuesta Estandar"); 
        }
      ])
    .post(tiendasControlador.save);

  router.route('/:idTienda')
    .get(tiendasControlador.findOne);

  return baseURI;
};

//Exportacion del modulo como funcion
module.exports = rutasTiendas;