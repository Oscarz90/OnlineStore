'use strict';

class Meta{
  constructor(id , code , status , type , message , detail , errors){
    this.id = id;
    this.code = code;
    this.status = status;
    this.type = type;
    this.message = message;
    this.detail = detail;
    this.errors = errors;
  }

  
}

module.exports = Meta;