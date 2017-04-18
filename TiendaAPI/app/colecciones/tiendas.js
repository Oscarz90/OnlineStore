"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CategoriasSchema = require('./categorias').schema;
var SeccionesSchema = require('./secciones').schema;
var EtiquetasSchema = require('./etiquetas').schema;

//Enumerados
var estadoEnumerado      = ['activo', 'inactivo', 'bloqueado'];
var visibilidadEnumerado = ['publico','privado'];

var TiendasSchema = new Schema({
  nombre        : {type : String, index:true, unique: true, required:true, trim:true}
  //, numero      : {type: Number, required:true}
  //, prueba      : {type: Number, min:0, max:1}
  , estatus     : {type : String, enum:estadoEnumerado, default:'activo'}
  , visibilidad : {type : String, enum:visibilidadEnumerado, default:'publico'}
  , secciones   : [SeccionesSchema]
  , categorias  : [CategoriasSchema]
  , etiquetas   : [EtiquetasSchema]
});

module.exports = {
  model    : mongoose.model('tiendas', TiendasSchema)
  , schema : TiendasSchema
};
