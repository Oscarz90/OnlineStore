var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoriasSchema = new Schema({ 
  nombre         : { type : String}
  , fechaCreacion : { type : Date, default :  Date.now }
});

module.exports = mongoose.model('tiendas', tiendasSchema);