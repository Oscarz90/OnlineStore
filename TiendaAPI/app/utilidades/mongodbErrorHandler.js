"use strict";
var ResponseErrorHandler = require('./responseErrorHandler');

class MongoDBErrorHandler extends ResponseErrorHandler{
  constructor(error,peticion,respuesta,next){
    super(error,peticion,respuesta,next)
  }

  

}


