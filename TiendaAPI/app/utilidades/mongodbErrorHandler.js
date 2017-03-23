"use strict";
var ResponseErrorHandler = require('./responseErrorHandler');

class MongoDBErrorHandler extends ResponseErrorHandler{
  constructor(error,peticion,respuesta,next){
    super(error,peticion,respuesta,next)
  }

  

}

module.exports = MongoDBErrorHandler;



/*

{
  MongoError:ClaseMongo
  
}
{ [MongoError: E11000 duplicate key error collection: TiendaDB.tiendas index: nombre_1 dup key: { : "alasgqaddob" }]
  name: 'MongoError',
  message: 'E11000 duplicate key error collection: TiendaDB.tiendas index: nombre_1 dup key: { : "alasgqaddob" }',
  driver: true,
  code: 11000,
  index: 0,
  errmsg: 'E11000 duplicate key error collection: TiendaDB.tiendas index: nombre_1 dup key: { : "alasgqaddob" }',
  getOperation: [Function],
  toJSON: [Function],
  toString: [Function] }
 */

