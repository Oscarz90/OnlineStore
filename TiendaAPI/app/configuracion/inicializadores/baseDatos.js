"use strict";
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = callback=>{
  mongoose.Promise = Promise;
  mongoose.connect('mongodb://localhost/TiendaDB', (error, result)=> {
    if(error){
      console.info("!Ocurrio un error al conectar y configurar la base de datos!");
      return callback(error,"Ocurrio un error al conectar y configurar la base de datos.");
    }else{
      console.info("¡Conexion y configuracion correctamente de base de datos!");
      return callback(null,"Conexion y configuracion correctamente de base de datos");
    }
  });
};