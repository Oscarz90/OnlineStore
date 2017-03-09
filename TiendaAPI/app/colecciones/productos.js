"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Enumerados
var estadoEnumerado      = ['activo', 'inactivo', 'bloqueado'];
var visibilidadEnumerado = ['publico','privado'];

var ProductosSchema = new Schema({ 
  sku           :{ type:String, required:true}
  , idTienda    :{ type:Schema.Types.ObjectId, required:true}
  , titulo      :{ type:String, required:true}
  , descripcion :{ type:String, required:true}
  , cantidad    :{ type:Number, min:0, required:true}
  , detalles    :{ type:String, required:true}
  , estatus     :{ type:String, enum:estadoEnumerado, default:'activo'}
  , visibilidad :{ type:String, enum:visibilidadEnumerado, default:'publico'}
  , dimensiones :{
    alto       :{ type:Number,min:0, required:true}
    , ancho    :{ type:Number,min:0, required:true}
    , profundo :{ type:Number,min:0, required:true}
    , peso     :{ type:Number,min:0, required:true}
  }
  , envio       :{
    dimensiones     :{
      alto       :{ type:Number, min:0, required:true}
      , ancho    :{ type:Number, min:0, required:true}
      , profundo :{ type:Number, min:0, required:true}
      , peso     :{ type:Number, min:0, required:true}
    }
    , costo         :{ type:Number, min:0, required:true}
    , transportista :{ type:String, required:true}
  }
  , precio      :{
    lista         : { type : Number, min : 0, required : true}
    , mayoreo     : { type : Number, min : 0}
    , menudeo     : { type : Number, min : 0}
    , promociones : [
      {
        rebaja                : { type : Number, required : true, min     : 0}
        , porcentajeRebaja    : { type : Number, required : true, min     : 0, default : 0}
        , fechaInicioVigencia : { type : Date, required   : true, default : Date.now}
        , fechaFinVigencia    : { type : Date, required   : true, default : Date.now}
      }
    ]
  }
  , productosRelacionados:[{idProducto:{type:Schema.Types.ObjectId, required:true}}]
  , comentarios:[
    {
      idUsuario       :{ type:Schema.Types.ObjectId, required:true}
      , comentario    :{ type:String, required:true}
      , clasificacion :{ type:Number, min:1, max:5, required:true}
    }
  ]
  , categorias : [{idCategoria:{type:Schema.Types.ObjectId, required:true}}]
  , etiquetas  : [{idEtiqueta:{type:Schema.Types.ObjectId, required:true}}]
});


module.exports = {
  model    : mongoose.model('productos', ProductosSchema)
  , schema : ProductosSchema
};
