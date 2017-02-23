"use strict";

var mongoose = require('mongoose');
var Tiendas = require('../colecciones/tiendas')
var TiendasDB = require('../accesoDatos/tiendas')
var Meta = require('../entidades/meta');

function TiendasControlador(){

};

TiendasControlador.prototype.findAll = (peticion,respuesta,next)=>{
  TiendasDB.findAll(Tiendas)
  .then(resultado=>{
    respuesta.locals.data=resultado;
    respuesta.locals.meta=new Meta("id" , "0000" , 200 , "OK" , "OK" , "OK" , undefined);
    console.log(respuesta.locals)
    next();
  })
  .catch(error=> {
    next();
  });
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




