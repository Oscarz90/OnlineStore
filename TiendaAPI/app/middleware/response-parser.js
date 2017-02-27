"use strict";
var Respuesta = require('../entidades/respuesta');

function responseParser(req,resp,next){
  var resultado = new Respuesta(resp.locals.meta,resp.locals.data);
  resp.status(resultado.meta.status).jsonp(resultado);
};

module.exports = responseParser;




var namespace = "datos";

var Objeto = {
	Nombre : 'ParametroA',
	Descripcion : "ParametroB",
	Imagenes : ["a.jpg","b.jpg","c.jpg","d.jpg"],
	Stock : 1,
	Categorias : [1,2,3,4,5],
	It : 1,
	Ites : ['a','b','c']
}

var transformarObjeto = (Objeto) => Object.keys(Objeto).map( x => Array.isArray(Objeto[x]) ? (Objeto[x] = { [namespace] : Objeto[x] } ): null);


transformarObjeto(Objeto)

console.log(Objeto)
