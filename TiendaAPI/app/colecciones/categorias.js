"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Enumerados
var estadoEnumerado = ['activo', 'inactivo', 'bloqueado'];

var categoriasSchema = new Schema({ 
  nombre          : {type : String , required : true}
  , estado        : {type : String , enum : estadoEnumerado , default : 'activo'}
  , fechaCreacion : {type : Date , default : Date.now } 
  , fechaModificacion : { type : Date, default : Date.now }
});

//module.exports = mongoose.model('categorias', tiendasSchema);
module.exports ={
  model    : mongoose.model('categorias', categoriasSchema)
  , schema : categoriasSchema
};