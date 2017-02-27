var mongoose = require('mongoose');

function TiendaDB(){};

TiendaDB.prototype.find = tiendas=>{
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

TiendaDB.prototype.findOne = tiendas=>{
  return new Promise((resolve, reject)=>{
    resolve("Se ejecuto correctamente");
  });
};

TiendaDB.prototype.insert = tiendas=>{
  return new Promise((resolve, reject)=>{
    resolve("Se ejecuto correctamente");
  });
};

TiendaDB.prototype.insertOne = tiendas=>{
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

module.exports = new TiendaDB();
