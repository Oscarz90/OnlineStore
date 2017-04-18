function AutoEstados(Auto){this.Auto = Auto}
AutoEstados.prototype.encender    = function(){console.log("encender no implementado")    }
AutoEstados.prototype.apagar      = function(){console.log("apagar no implementado")      }
AutoEstados.prototype.detener     = function(){console.log("detener no implementado")     }
AutoEstados.prototype.acelerar    = function(){console.log("acelerar no implementado")    }
AutoEstados.prototype.desacelerar = function(){console.log("desacelerar no implementado") }

function AutoEncendido(Auto){AutoEstados.call(this,Auto)}
AutoEncendido.prototype             = new AutoEstados();
AutoEncendido.prototype.constructor = AutoEncendido;
AutoEncendido.prototype.acelerar    = function(){
  console.log("Acelerando + + +")
  this.Auto.velocidad+=10;
  this.Auto.gasolina-=2;
  console.log(`Velocidad: ${this.Auto.velocidad}`)
  console.log(`Gasolina: ${this.Auto.gasolina}`)
}

function AutoApagado(Auto){AutoEstados.call(this,Auto)}
AutoApagado.prototype             = Object.create(AutoEstados.prototype);
AutoApagado.prototype.constructor = AutoApagado;
AutoApagado.prototype.encender    = function(){
  console.log("Ya encendi el auto");
  console.log(`Velocidad: ${this.Auto.velocidad}`)
  Object.setPrototypeOf(this.Auto,new AutoEncendido(this.Auto))
}

function Auto(){
  this.velocidad=0;
  this.gasolina=50;
}

var vw = new Auto();
//Establecer Estado Inicial
Object.setPrototypeOf(vw, new AutoApagado(vw));

vw.encender()
vw.acelerar()
vw.acelerar()
vw.detener()











