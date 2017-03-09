"use strict";
var TiendasModelo = require('../colecciones/tiendas').model;
var TiendasDB = require('../accesoDatos/tiendas');
var Meta = require('../entidades/meta');

function TiendasControlador(){};

TiendasControlador.prototype.findOne = (peticion,respuesta,next)=>{
  TiendasDB.findOne(peticion.params.idTienda)
  .then(resultado=>{
    respuesta.locals.results={tiendas:resultado};
    respuesta.locals.metadata=new Meta("id" , "0000" , 200 , "OK" , "OK" , "OK" , undefined);
    console.log(respuesta)
    next();
  })
  .catch(error=>next());
};

TiendasControlador.prototype.insertOne = (peticion,respuesta,next)=>{
  //Generar entidad a guardar
  var tienda = new TiendasModelo({
    nombre : peticion.body.nombre
    , numero:peticion.body.numero
  });

  TiendasDB.insertOne(tienda)
    .then(resultado=> {
      respuesta.locals.results=resultado;
      respuesta.locals.metadata=new Meta("id" , "0000" , 200 , "OK" , "OK" , "OK" , undefined);
      next()
    })
    .catch(error=> {
      console.log(typeof error)
      respuesta.locals.results=error;
      respuesta.locals.metadata=new Meta("id" , "0000" , 200 , "OK" , "OK" , "OK" , undefined);
      next()
    });
};

TiendasControlador.prototype.updateOne =(peticion,respuesta,next)=>{
  TiendasDB.updateOne(peticion.body.params.idTienda, peticion.body)
    .then(result=> respuesta.status(200).send("Actualice"))
    .catch(error=> respuesta.status(200).send("Ocurrio un error"));
}

module.exports = new TiendasControlador();




