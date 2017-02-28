var mongoose = require('mongoose');
var TiendasModelo = require('../colecciones/tiendas').model;
function TiendaDB(){};

TiendaDB.prototype.find =()=>{
  return new Promise((resolve, reject)=>{
    TiendasModelo.find().exec()
    .then(resultado=>{
      resolve(resultado)
    })
    .catch(error=>{
      reject(error)
    });
  })
};

TiendaDB.prototype.findById =(id)=>{
  return new Promise((resolve, reject)=>{
    TiendasModelo.findOne({_id:id}).exec()
    .then(resultado=>{
      resolve(resultado)
    })
    .catch(error=>{
      reject(error)
    });
  })
};

TiendaDB.prototype.findOne = ()=>{
  return new Promise((resolve, reject)=>{
    resolve("Se ejecuto correctamente");
  });
};

TiendaDB.prototype.insert = ()=>{
  return new Promise((resolve, reject)=>{
    resolve("Se ejecuto correctamente");
  });
};

TiendaDB.prototype.insertOne = (tienda)=>{
  return new Promise((resolve, reject)=>{
    tienda.save()
      .then((result)=>{
        resolve(result);
      })
      .catch((error)=>{
        reject(error);
      })
  });
};

module.exports = new TiendaDB();
