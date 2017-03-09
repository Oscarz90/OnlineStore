"use strict";
var TiendasModelo = require('../colecciones/tiendas').model;
var TiendasDB = require('../accesoDatos/tiendas');
var Meta = require('../entidades/meta');

function TiendasControlador(){};

/**
 * [description]
 * @param  {[type]}   peticion  [description]
 * @param  {[type]}   respuesta [description]
 * @param  {Function} next      [description]
 * @return {[type]}             [description]
 */
TiendasControlador.prototype.findOne = (peticion,respuesta,next)=>{
  TiendasDB.findOne(peticion.params.idTienda)
  .then(resultado=>{
    respuesta.locals.results={tiendas:resultado};
    respuesta.locals.metadata=new Meta("id" , "0000" , 200 , "OK" , "OK" , "OK" , undefined);
    next();
  })
  .catch(error=>next());
};

/**
 * [description]
 * @param  {[type]}   peticion  [description]
 * @param  {[type]}   respuesta [description]
 * @param  {Function} next      [description]
 * @return {[type]}             [description]
 */
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

/**
 * [description]
 * @param  {[type]}   peticion  [description]
 * @param  {[type]}   respuesta [description]
 * @param  {Function} next      [description]
 * @return {[type]}             [description]
 */
TiendasControlador.prototype.updateOne =(peticion,respuesta,next)=>{
  TiendasDB.updateOne(peticion.params.idTienda, peticion.body)
    .then(resultado=> {
      respuesta.locals.results=resultado?resultado:{};
      if(resultado){
        respuesta.locals.metadata=new Meta("id" , "0000" , 200 , "Recurso actualizado correctamente." , "Recurso actualizado correctamente. " , "Recurso actualizado correctamente." , undefined );
      }else{
        respuesta.locals.metadata=new Meta("id" , "0000" , 404 , "Recurso no encontrado." , "Recurso no encontrado." , "Recurso no encontrado." , undefined);  
      }
      next()
    })
    .catch(error=> {
      respuesta.locals.results=error;
      respuesta.locals.metadata=new Meta("id" , "0000" , 200 , "OK" , "OK" , "OK" , undefined);
      next()
    });
};

module.exports = new TiendasControlador();




