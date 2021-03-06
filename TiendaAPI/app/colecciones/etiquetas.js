"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Enumerados
var estadoEnumerado      = ['activo', 'inactivo', 'bloqueado'];
var visibilidadEnumerado = ['publico','privado'];

var EtiquetasSchema = new Schema({ 
  nombre        :{ type : String , required : true}
  , estatus     :{ type : String, enum:estadoEnumerado, default:'activo'}
  , visibilidad :{ type : String, enum:visibilidadEnumerado, default:'publico'}
});

module.exports ={
  model    : mongoose.model('etiquetas', EtiquetasSchema)
  , schema : EtiquetasSchema
};