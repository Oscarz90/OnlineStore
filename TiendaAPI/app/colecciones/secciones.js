"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductosSchema = require('./productos').schema;

//Enumerados
var estadoEnumerado      = ['activo', 'inactivo', 'bloqueado'];
var visibilidadEnumerado = ['publico','privado'];

var SeccionesSchema = new Schema({ 
  nombre: {type : String , required : true}
  , estatus : {type : String, enum:estadoEnumerado, default:'activo'}
  , visibilidad : {type : String, enum:visibilidadEnumerado, default:'publico'}
  , productos:[ProductosSchema]
});

module.exports ={
  model    : mongoose.model('secciones', SeccionesSchema)
  , schema : SeccionesSchema
};