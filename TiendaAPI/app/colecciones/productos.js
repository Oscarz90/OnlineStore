"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Enumerados
var estadoEnumerado = ['activo', 'inactivo', 'bloqueado'];

var ProductosSchema = new Schema({ 
  idProducto : {type:Schema.Types.ObjectId}
  , estado : {type:String, enum:estadoEnumerado, default:'activo'}
  , fechaCreacion : { type : Date, default : Date.now }
  , fechaModificacion : { type : Date, default : Date.now }
});

module.exports = {
  model    : mongoose.model('productos', ProductosSchema)
  , schema : ProductosSchema
};
