"use strict";
var 
class MongooseErrorHandler{
  constructor(error,peticion,respuesta,next){
    this.error     = error;
    this.peticion  = peticion;
    this.respuesta = respuesta;
    this.next      = next;
  }
  



}

module.exports = MongooseErrorHandler;

/*
msg.general = {};
msg.general.default = 'Validator failed for path `{PATH}` with value `{VALUE}`';
msg.general.required = 'Path `{PATH}` is required.';

msg.Number = {};
msg.Number.min = 'Path `{PATH}` ({VALUE}) is less than minimum allowed value ({MIN}).';
msg.Number.max = 'Path `{PATH}` ({VALUE}) is more than maximum allowed value ({MAX}).';

msg.Date = {};
msg.Date.min = 'Path `{PATH}` ({VALUE}) is before minimum allowed value ({MIN}).';
msg.Date.max = 'Path `{PATH}` ({VALUE}) is after maximum allowed value ({MAX}).';

msg.String = {};
msg.String.enum = '`{VALUE}` is not a valid enum value for path `{PATH}`.';
msg.String.match = 'Path `{PATH}` is invalid ({VALUE}).';
msg.String.minlength = 'Path `{PATH}` (`{VALUE}`) is shorter than the minimum allowed length ({MINLENGTH}).';
msg.String.maxlength = 'Path `{PATH}` (`{VALUE}`) is longer than the maximum allowed length ({MAXLENGTH}).';
 */