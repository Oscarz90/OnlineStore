var mongoose = require('mongoose');
var TiendasModelo = require('../colecciones/secciones').model;

function SeccionesBD(){};

SeccionesBD.prototype.find =()=>new Promise((resolve, reject)=>{
  TiendasModelo.find().exec()
  .then(resultado=>{
    resolve(resultado)
  })
  .catch(error=>{
    reject(error)
  });
});

SeccionesBD.prototype.findById =(id)=>new Promise((resolve, reject)=>{
  TiendasModelo.findOne({_id:id}).exec()
  .then(resultado=>{
    resolve(resultado)
  })
  .catch(error=>{
    reject(error)
  });
});

SeccionesBD.prototype.findOne=()=>new Promise((resolve, reject)=>{
  resolve("Se ejecuto correctamente");
});

SeccionesBD.prototype.insert=()=>new Promise((resolve, reject)=>{
  resolve("Se ejecuto correctamente");
});

SeccionesBD.prototype.insertOne = (tienda)=>new Promise((resolve, reject)=>{
  tienda.save()
    .then((result)=>{
      resolve(result);
    })
    .catch((error)=>{
      reject(error);
    })
});


module.exports = new SeccionesBD();
