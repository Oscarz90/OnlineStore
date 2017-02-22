var mongoose = require('mongoose');

function tiendaDB(){

}

tiendaDB.prototype.save = tiendas=>{
  return new Promise((resolve, reject)=>{
    tiendas.save()
      .then((result)=>{
        resolve("Se inserto correctamente los datos");
      })
      .catch((error)=>{
        reject("Ocurrio un error en la insercion de datos.");
      })
  });
};

tiendaDB.prototype.findAll = tiendas=>{
  return new Promise((resolve, reject)=>{
    tiendas.find().exec()
    .then(result=>{
      throw new Error("No pude obtener los datos");
      //resolve(result)
      //reject("no salio")
    })
    .catch(error=>{
      //throw error
      reject(error)
    });
  })
};

module.exports = new tiendaDB();
