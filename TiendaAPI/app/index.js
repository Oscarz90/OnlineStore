var servidor = require('./configuracion/inicializadores/servidor');
var basedatos = require('./configuracion/inicializadores/baseDatos');
var ambiente = require('./configuracion/inicializadores/ambiente');
var async = require('async');


//Inicializar modulos
async.series([
  basedatos
  , ambiente
  , servidor ]
  , error => console.info(error?"¡RESTFUL Api No Iniciada Correctamente!":"¡RESTFUL Api Iniciada Correctamente!")
);