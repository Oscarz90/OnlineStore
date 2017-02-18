var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = function(callback){
  'use strict';

  mongoose.connect('mongodb://localhost/TiendaDB', function(error, result) {
    if(error) throw error;
    console.log('Conectado a la base de datos!!!!');
  });

  mongoose.Promise = Promise;

  //Retornamos el callback para async
  if(callback){
    return callback(null,"Se ejecuto correctamente el modulo ./app/configuracion/servidor")
  };
}