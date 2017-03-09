var mongoose = require('mongoose');
var SeccionesModelo = require('../colecciones/secciones').model;

function SeccionesBD(){};


/**
 * [Busca secciones]
 * @param  {Promise} )> [description]
 * @return {[Promise]}     [description]
 */
SeccionesBD.prototype.find =()=>new Promise((resolve, reject)=>{
  SeccionesModelo.find().exec()
  .then(resultado=>{
    resolve(resultado)
  })
  .catch(error=>{
    reject(error)
  });
});


/**
 * [Busca una secciones]
 * @param  {Promise} )> [description]
 * @return {[Promise]}     [description]
 */
SeccionesBD.prototype.findOne =(idseccion)=>new Promise((resolve, reject)=>{
  SeccionesModelo.findOne({_id:idseccion}).exec()
  .then(resultado=>{
    resolve(resultado)
  })
  .catch(error=>{
    reject(error)
  });
});


/**
 * [Inserta una seccion]
 * @param  {Promise} )> [description]
 * @return {[type]}     [description]
 */
SeccionesBD.prototype.insertOne = (seccion)=>new Promise((resolve, reject)=>{
  seccion.save()
    .then((result)=>{
      resolve(result);
    })
    .catch((error)=>{
      reject(error);
    })
});

/**
 * [Actualiza una seccion]
 * @param  {Promise} )> [description]
 * @return {[type]}     [description]
 */
SeccionesBD.prototype.updateOne = (idSeccion, seccion) => new Promise((resolve,reject)=>{
  SeccionesModelo.findOneAndUpdate({ _id : idSeccion} ,  seccion, {new:true})
  .then(resultado=>{
    resolve(resultado)
  })
  .catch(error=>{
    reject(error);
  });
});


module.exports = new SeccionesBD();
