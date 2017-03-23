"use strict";

class ErrorHandler{
  constructor(error,peticion,respuesta,next){
    this.error     = error;
    this.peticion  = peticion;
    this.respuesta = respuesta;
    this.next      = next;
  }
}

module.exports = ErrorHandler;