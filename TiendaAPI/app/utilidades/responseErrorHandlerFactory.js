"use strict";
var ErrorHandler = function(){};

function ResponseErrorHandlerFactory(error){
  this.error=error;
}

ResponseErrorHandlerFactory.prototype.errorType = ErrorHandler;

ResponseErrorHandlerFactory.prototype.crearErrorHandler=function(){
  if(this.error.name.trim()=="MongoError"){
    console.log("MongoError")
  }else if(this.error.name.trim()=="ValidationError"){
    console.log("ValidationError")
  }else{
    console.log("ErrorHandlerDefault")
  }
};

module.exports = ResponseErrorHandlerFactory;