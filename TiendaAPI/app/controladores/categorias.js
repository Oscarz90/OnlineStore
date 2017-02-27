"use strict";
var CategoriasModelo = require('../colecciones/categorias').model;
var CategoriasDB = require('../accesoDatos/categorias');
var Meta = require('../entidades/meta');

function CategoriasControlador(){};

CategoriasControlador.prototype.find = (peticion,respuesta,next)=>{
  CategoriasDB.find(CategoriasModelo)
  .then(resultado=>{
    next();
  })
  .catch(error=> {
    next();
  });
};

CategoriasControlador.prototype.findOne = (peticion,respuesta,next)=>{
  CategoriasDB.find(CategoriasModelo)
  .then(resultado=>{
    next();
  })
  .catch(error=> {
    next();
  });
};

CategoriasControlador.prototype.insert = (peticion,respuesta,next)=>{
  CategoriasDB.find(CategoriasModelo)
  .then(resultado=>{
    next();
  })
  .catch(error=> {
    next();
  });
};

CategoriasControlador.prototype.insertOne = (peticion,respuesta,next)=>{
  CategoriasDB.find(CategoriasModelo)
  .then(resultado=>{
    next();
  })
  .catch(error=> {
    next();
  });
};

module.exports = new CategoriasControlador();




