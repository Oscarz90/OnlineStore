'use strict';
class Errores{
  constructor(code , status , type , message , detail){
    this.code    = code;
    this.status  = status;
    this.type    = type;
    this.message = message;
    this.detail  = detail;
  }
}

module.exports = Errores;