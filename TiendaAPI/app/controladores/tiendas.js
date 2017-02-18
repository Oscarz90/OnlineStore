//require('../colecciones/tiendas');
var mongoose = require('mongoose');
var Tiendas = require('../colecciones/tiendas')
var TiendasDB = require('../accesoDatos/tiendas')

function TiendasControlador(){

};

TiendasControlador.prototype.findAll = (peticion,respuesta,next)=>{
  TiendasDB.findAll(Tiendas)
  .then(result=>{
    respuesta.status(200).jsonp(result)
    console.log(next)
    next()
  })
  .catch(error=> respuesta.status(200).send("Ocurrio un error"));

};

TiendasControlador.prototype.findOne = (peticion,respuesta)=>{
  console.log("GET /tiendas/ -> find");
  respuesta.status(200).send("GET /tiendas/:idTienda -> find");
};

TiendasControlador.prototype.save = (peticion,respuesta)=>{
  console.log("insertar")
  var tiendas = new Tiendas({
    nombre : peticion.body.nombre
  });

  
  TiendasDB.save(tiendas)
    .then(result=> respuesta.status(200).send("Inserte"))
    .catch(error=> respuesta.status(200).send("Ocurrio un error"));

};

module.exports = new TiendasControlador();




