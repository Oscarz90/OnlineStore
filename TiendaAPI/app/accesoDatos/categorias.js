var mongoose = require('mongoose');
var CategoriasModelo = require('../colecciones/categorias').model
function CategoriasDB(){};

CategoriasDB.prototype.find = ()=>{
  return new Promise((resolve, reject)=>{
    resolve("Se ejecuto correctamente");
  })
};

CategoriasDB.prototype.findOne = ()=>{
  return new Promise((resolve, reject)=>{
    resolve("Se ejecuto correctamente");
  });
};

CategoriasDB.prototype.insert = ()=>{
  return new Promise((resolve, reject)=>{
    resolve("Se ejecuto correctamente");
  });
};

CategoriasDB.prototype.insertOne = ()=>{
  return new Promise((resolve, reject)=>{
    resolve("Se ejecuto correctamente");
  });
};



module.exports = new CategoriasDB();
