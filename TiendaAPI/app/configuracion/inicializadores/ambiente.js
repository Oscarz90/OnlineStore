"use strict";
var nconf=require('nconf');

var ambiente = callback=>{
  //Carga variables de Ambiente del archivo .env
  require('dotenv').load();

  //Establece la configuracion con persistencia en memoria en vez de archivo
  nconf.use('memory');

  //Carga argumentos de linea de comandos cuando se ejecuto Node
  //process.argv
  nconf.argv();
  //console.info(`Process Argv ${process.argv}`);
  
  //Carga variables de ambiente -> require('dotenv').load();
  //process.env
  nconf.env();
  //console.info(process.env);
  
  if(callback){
    console.info("¡Se configuro correctamente las variables de ambiente!")
    return callback(null,"Se configuro correctamente las variables de ambiente");
  }
};

module.exports=ambiente;



