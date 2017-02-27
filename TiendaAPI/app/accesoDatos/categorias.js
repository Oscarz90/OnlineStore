var mongoose = require('mongoose');

function CategoriasDB(){};

CategoriasDB.prototype.find = categorias=>{
  return new Promise((resolve, reject)=>{
    resolve("Se ejecuto correctamente");
  })
};

CategoriasDB.prototype.findOne = categorias=>{
  return new Promise((resolve, reject)=>{
    resolve("Se ejecuto correctamente");
  });
};

CategoriasDB.prototype.insert = categorias=>{
  return new Promise((resolve, reject)=>{
    resolve("Se ejecuto correctamente");
  });
};

CategoriasDB.prototype.insertOne = categorias=>{
  return new Promise((resolve, reject)=>{
    resolve("Se ejecuto correctamente");
  });
};



module.exports = new CategoriasDB();
