"use strict";
var TiendasModelo = require('../colecciones/tiendas').model;
var TiendasDB = require('../accesoDatos/tiendas');
var Meta = require('../entidades/meta');

function TiendasControlador(){};

TiendasControlador.prototype.find = (peticion,respuesta,next)=>{
  TiendasDB.find(TiendasModelo)
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

TiendasControlador.prototype.findOne = (peticion,respuesta,next)=>{
  TiendasDB.find(TiendasModelo)
  .then(resultado=>{
    next();
  })
  .catch(error=> {
    next();
  });
};

TiendasControlador.prototype.insert = (peticion,respuesta,next)=>{
  TiendasDB.find(TiendasModelo)
  .then(resultado=>{
    next();
  })
  .catch(error=> {
    next();
  });
};

TiendasControlador.prototype.insertOne = (peticion,respuesta,next)=>{
  console.log("insertar")
  var TiendasModelo = new TiendasModelo({
    nombre : peticion.body.nombre
    , categorias : peticion.body.categorias
  });

  
  TiendasDB.insert(TiendasModelo)
    .then(result=> respuesta.status(200).send("Inserte"))
    .catch(error=> respuesta.status(200).send("Ocurrio un error"));

};

module.exports = new TiendasControlador();




