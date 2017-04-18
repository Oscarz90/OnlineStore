"use strict";
const ResponseErrorHandler= require('../utilidades/responseErrorHandler');
const Respuesta = require('../entidades/respuesta');
module.exports = (error, peticion, respuesta, next)=>{
  //Manejo de Errores
  var resp = new ResponseErrorHandler(error, peticion, respuesta, next);
  resp.obtenerErrores();
  console.log("····")
  console.log(respuesta.locals.metadata)

  respuesta.status(400).jsonp(new Respuesta(respuesta.locals.metadata, undefined));
};