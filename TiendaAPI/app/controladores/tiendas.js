"use strict";
var TiendasModelo = require('../colecciones/tiendas').model;
var TiendasDB = require('../accesoDatos/tiendas');
var Meta = require('../entidades/meta');

function TiendasControlador(){};

TiendasControlador.prototype.find = (peticion,respuesta,next)=>{
  TiendasDB.find()
  .then(resultado=>{
    respuesta.locals.results = {tiendas:resultado};
    respuesta.locals.metadata=new Meta("id" , "0000" , 200 , "OK" , "OK" , "OK" , undefined);
    next();
  })
  .catch(error=> {
    next();
  });
};

TiendasControlador.prototype.findById = (peticion,respuesta,next)=>{
  TiendasDB.findById(peticion.params.idTienda)
  .then(resultado=>{
    respuesta.locals.results={tiendas:resultado};
    respuesta.locals.metadata=new Meta("id" , "0000" , 200 , "OK" , "OK" , "OK" , undefined);
    next();
  })
  .catch(error=> {
    next();
  });
};

TiendasControlador.prototype.findOne = (peticion,respuesta,next)=>{
  TiendasDB.find()
  .then(resultado=>{
    next();
  })
  .catch(error=> {
    next();
  });
};

TiendasControlador.prototype.insert = (peticion,respuesta,next)=>{
  TiendasDB.find()
  .then(resultado=>{
    next();
  })
  .catch(error=> {
    next();
  });
};

TiendasControlador.prototype.insertOne = (peticion,respuesta,next)=>{
  var tienda = new TiendasModelo({
    nombre : peticion.body.nombre
  });
  console.log(peticion.body.nombre)

  TiendasDB.insertOne(tienda)
    .then(result=> respuesta.status(200).send("Inserte"))
    .catch(error=> respuesta.status(200).send("Ocurrio un error"));

};

module.exports = new TiendasControlador();




