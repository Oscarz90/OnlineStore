var server = require('./configuracion/inicializadores/servidor');
var baseDatos = require('./configuracion/inicializadores/baseDatos');
var async = require('async');


//Inicializar modulos
async.series([
    function iniciarBaseDatos(callback){
      baseDatos(callback);
    }
    , function iniciarServidor(callback){
      server(callback);
    }
  ]
  , function(error){
    if(error){
      console.log("APLICACION NO INICIALIZADA");
    }else{
      console.log("APLICACION INICIALIZADA");
    }
  }
)