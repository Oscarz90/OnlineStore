var mongoose = require('mongoose');

function tiendaDB(){};

/**
 * [description]
 * @param  {[type]} tiendas [description]
 * @return {[type]}         [description]
 */
tiendaDB.prototype.findAll = tiendas=>{
  return new Promise((resolve, reject)=>{
    tiendas.find().exec()
    .then(resultado=>{
      resolve(resultado)
    })
    .catch(error=>{
      reject(error)
    });
  })
};

/**
 * [description]
 * @param  {[type]} tiendas [description]
 * @return {[type]}         [description]
 */
tiendaDB.prototype.save = tiendas=>{
  return new Promise((resolve, reject)=>{
    tiendas.save()
      .then((result)=>{
        resolve(result);
      })
      .catch((error)=>{
        reject(error);
      })
  });
};



module.exports = new tiendaDB();
