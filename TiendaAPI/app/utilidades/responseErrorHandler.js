"use strict";
var Error = require('../entidades/error');
var Meta = require('../entidades/meta');
var ResponseErrorHandlerFactory = require('./responseErrorHandlerFactory');
/**
 * [ErrorHandler description]
 * @param {[type]}   error     [description]
 * @param {[type]}   peticion  [description]
 * @param {[type]}   respuesta [description]
 * @param {Function} next      [description]
 */
function ErrorHandler(error,peticion,respuesta,next){
  this.error=error;
  this.peticion= peticion;
  this.respuesta=respuesta;
  this.next=next;
}

ErrorHandler.prototype.obtenerErrores=function(){
  var errorHandler = new ResponseErrorHandlerFactory(this.error).crearErrorHandler();
  console.log(errorHandler);
  //Mongoose Errors
  //var errores = Object.keys(this.error.errors).map(atributo=>new Error("ERROR-0001",200,this.error.errors[atributo].name,this.error.errors[atributo].kind,this.error.errors[atributo].message));  
  //this.respuesta.locals.metadata = new Meta(12341234,"ERROR-0001",200,this.error.name,this.error.message,this.error.message,errores)

  //Mongodb Errors  
  /*this.respuesta.locals.metadata = 
    new Meta(
      12341234
      , this.error.code.toString()
      , 200
      , this.error.name
      , this.error.message
      , this.error.errmsg
      , [new Error(
        this.error.code.toString()
        , 200 
        , this.error.name 
        , this.error.message 
        , this.error.errmsg )]
    );*/
};

module.exports = ErrorHandler;