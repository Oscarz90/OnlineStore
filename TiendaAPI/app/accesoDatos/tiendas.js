var mongoose = require('mongoose');
var TiendasModelo = require('../colecciones/tiendas').model;

function TiendaDB(){};

TiendaDB.prototype.find =()=>new Promise((resolve, reject)=>{
  TiendasModelo.find().exec()
  .then(resultado=>{
    resolve(resultado)
  })
  .catch(error=>{
    reject(error)
  });
});

TiendaDB.prototype.findById =(id)=>new Promise((resolve, reject)=>{
  TiendasModelo.findOne({_id:id}).exec()
  .then(resultado=>{
    resolve(resultado)
  })
  .catch(error=>{
    reject(error)
  });
});

TiendaDB.prototype.findOne=()=>new Promise((resolve, reject)=>{
  resolve("Se ejecuto correctamente");
});

TiendaDB.prototype.insert=()=>new Promise((resolve, reject)=>{
  resolve("Se ejecuto correctamente");
});

TiendaDB.prototype.insertOne = (tienda)=>new Promise((resolve, reject)=>{
  tienda.save()
    .then((result)=>{
      resolve(result);
    })
    .catch((error)=>{
      reject(error);
    })
});

TiendaDB.prototype.updateOne = (tienda)=>new Promise((resolve, reject)=>{
  tienda.update({_id  : ObjectId(tienda.idTienda)},  tienda)
    .then((result)=>{
      resolve(result);
    })
    .catch((error)=>{
      reject(error);
    })
});

TiendaDB.prototype.updatePatch = (tienda)=>new Promise((resolve, reject)=>{
  tienda.update({_id  : ObjectId(tienda.idTienda)}, {$set: tienda})
    .then((result)=>{
      resolve(result);
    })
    .catch((error)=>{
      reject(error);
    })
});


module.exports = new TiendaDB();
