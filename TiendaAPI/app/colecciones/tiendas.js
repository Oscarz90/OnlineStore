var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CategoriasSchema = require('./categorias').schema;
//Enumerados
var estadoEnumerado = ['activo', 'inactivo', 'bloqueado'];

var TiendasSchema = new Schema({ 
  nombre          : { 
    type : String}
  , categorias    : [CategoriasSchema]
  , estado        : {
    type : String
    , enum : estadoEnumerado
    , default : 'activo'}
  , fechaCreacion : { 
    type : Date
    , default : Date.now} 
});

module.exports = {
  model    : mongoose.model('tiendas', TiendasSchema)
  , schema : TiendasSchema
};
