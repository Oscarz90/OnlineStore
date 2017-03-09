var mongoose = require('mongoose');
var TiendasModelo = require('../colecciones/tiendas').model;

function TiendaDB(){};

/**
 * [Busca una tienda]
 * @param  {Promise} )> [description]
 * @return {[Promise]}     [description]
 */
TiendaDB.prototype.findOne=(idTienda)=>new Promise((resolve, reject) => {
  TiendasModelo.findOne({_id:idTienda}).exec().then(resultado=>{
    resolve(resultado)
  }).catch(error=>{
    reject(error)
  });
});

/**
 * [Inserta una tienda]
 * @param  {Promise} )> [description]
 * @return {[type]}     [description]
 */
TiendaDB.prototype.insertOne=(tienda)=>new Promise((resolve, reject) =>{
  tienda.save()
  .then(resultado=>{resolve(resultado)})
  .catch(error=>reject(error));
});

/**
 * [Actualiza una tienda]
 * @param  {Promise} )> [description]
 * @return {[type]}     [description]
 */
TiendaDB.prototype.updateOne=(idTienda, tienda)=>new Promise((resolve, reject) =>{
  TiendaModelo.updateOne().exec().then(resultado=>resolve(resultado)).catch(error=>reject(error));
});



module.exports = new TiendaDB();
