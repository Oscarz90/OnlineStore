var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var categoriasSchema = require('./categorias').schema;
//Enumerados
var estadoEnumerado = ['activo', 'inactivo', 'bloqueado'];

var tiendasSchema = new Schema({ 
  nombre          : { 
    type : String}
  , categorias    : [categoriasSchema]
  , estado        : {
    type : String
    , enum : estadoEnumerado
    , default : 'activo'}
  , fechaCreacion : { 
    type : Date
    , default : Date.now} 
});

module.exports = {
  model    : mongoose.model('tiendas', tiendasSchema)
  , schema : tiendasSchema
};
