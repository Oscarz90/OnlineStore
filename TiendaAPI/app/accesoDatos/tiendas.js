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
    tiendas.find(function(error, tiendas){
      if(error) throw error;

      resolve(tiendas);
    })
  })
};

module.exports = new tiendaDB();