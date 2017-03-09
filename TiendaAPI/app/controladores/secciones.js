"use strict";
var SeccionesModelo = require('../colecciones/secciones').model;
var SeccionesDB = require('../accesoDatos/secciones');
var Meta = require('../entidades/meta');

function SeccionesControlador(){};


/**
 * [description]
 * @param  {[type]}   peticion  [description]
 * @param  {[type]}   respuesta [description]
 * @param  {Function} next      [description]
 * @return {[type]}             [description]
 */
SeccionesControlador.prototype.find = (peticion,respuesta,next)=>{
  SeccionesDB.find()
  .then(resultado=>{
    respuesta.locals.results={Secciones:resultado};
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
SeccionesControlador.prototype.findOne = (peticion,respuesta,next)=>{
  SeccionesDB.findOne(peticion.params.idSeccion)
  .then(resultado=>{
    respuesta.locals.results={Secciones:resultado};
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
SeccionesControlador.prototype.insertOne = (peticion,respuesta,next)=>{
  //Generar entidad a guardar
  

  var seccion = new SeccionesModelo({
    nombre : peticion.body.nombre
    , estatus:peticion.body.estatus
    , visibilidad : peticion.body.visibilidad
  });
  SeccionesDB.insertOne(seccion)
    .then(resultado=> {
      respuesta.locals.results=resultado;
      respuesta.locals.metadata=new Meta("id" , "0000" , 200 , "OK" , "OK" , "OK" , undefined);
      next()
    })
    .catch(error=> {
      respuesta.locals.results=error;
      respuesta.locals.metadata=new Meta("id" , "0000" , 400 , "OK" , "OK" , "OK" , undefined);
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
SeccionesControlador.prototype.updateOne =(peticion,respuesta,next)=>{
  SeccionesDB.updateOne(peticion.params.idSeccion, peticion.body)
    .then(result=> {
      respuesta.locals.results=resultado;
      respuesta.locals.metadata=new Meta("id" , "0000" , 200 , "OK" , "OK" , "OK" , undefined);
      next();
    })
    .catch(error=>{ 
      respuesta.locals.results=error;
      respuesta.locals.metadata=new Meta("id" , "0000" , 400 , "OK" , "OK" , "OK" , undefined);
      next();
    });
};

module.exports = new SeccionesControlador();