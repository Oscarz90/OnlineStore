var server = require('./configuracion/inicializadores/servidor');
var async = require('async');


//Inicializar modulos
async.series(
  [
    function inicial(callback){
      return callback(null,"Primer paso");
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