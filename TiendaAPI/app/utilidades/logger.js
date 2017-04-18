var winston = require('winston');

// configuramos un nivel default de log
var logLevel = 'info'

// configuracion de log
var customColors = {
  trace: 'white'
  , debug: 'green'
  , info: 'green'
  , warn: 'yellow'
  , crit: 'red'
  , fatal: 'red'
};

var levelsLogger = {
  fatal: 0,
    crit: 1,
    warn: 2,
    info: 3,
    debug: 3,
    trace: 3
}
//Inicializamos logger de winston
var logger = new (winston.Logger)({
  colors: customColors
  , level: logLevel
  , levels: levelsLogger
  , transports: [
    new (winston.transports.Console)({
      colorize: true
      , timestamp: true
    })
    //, new (winston.transports.File)({ filename: 'somefile.log' })
  ]
})
//Se añaden los colores a utilizar
winston.addColors(customColors);

// Extendemos del objeto 'Error' de log
var origLog = logger.log;
//funcion a sobre escribir
logger.log =  (level, msg) =>{
  if (msg instanceof Error) {
    var args = Array.prototype.slice.call(arguments)
    args[1] = msg.stack
    origLog.apply(logger, args)
  } else {
    //console.log(arguments)
    origLog.apply(logger, arguments)
  }
}
/*Ejemplos
var log = require('./log.js')
log.trace('testing')
log.debug('testing')
log.info('testing')
log.warn('testing')
log.crit('testing')
log.fatal('testing')
    */

module.exports = logger;
