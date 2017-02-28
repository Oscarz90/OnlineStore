"use strict";
var Respuesta = require('../entidades/respuesta');

let namespace="data";
const formatearResultados = (resultados)=>Object.keys(resultados).map(atributo=>Array.isArray(resultados[atributo])?(resultados[atributo]={[namespace]:resultados[atributo], lenght:resultados[atributo].length}):resultados[atributo]);

function responseParser(req,resp){
  formatearResultados(resp.locals.results);
  const resultado = new Respuesta(resp.locals.metadata,resp.locals.results);
  resp.status(resultado.metadata.status).jsonp(resultado);
};



module.exports = responseParser;

