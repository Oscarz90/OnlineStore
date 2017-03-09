var servidor = require('./configuracion/inicializadores/servidor');
var basedatos = require('./configuracion/inicializadores/baseDatos');
var ambiente = require('./configuracion/inicializadores/ambiente');
var async = require('async');


//Inicializar modulos
async.series([
  ambiente
  , basedatos
  , servidor ]
  , (error,resultado) => console.info(error?error:"¡RESTFUL Api Iniciada Correctamente!")
);
