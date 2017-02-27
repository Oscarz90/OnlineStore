"use strict";
var Respuesta = require('../entidades/respuesta');

function responseParser(req,resp,next){
  var resultado = new Respuesta(resp.locals.meta,resp.locals.data);
  resp.status(resultado.meta.status).jsonp(resultado);
};

module.exports = responseParser;