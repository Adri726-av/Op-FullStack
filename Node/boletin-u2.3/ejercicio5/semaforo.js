// Semáforo: una clase que HEREDA de EventEmitter
const EventEmitter = require('events')

class Semaforo extends EventEmitter {
  constructor(ms) {
    super() // obligatorio al heredar
    this.colores = ['verde', 'ámbar', 'rojo']
    this.indice = 0 // empieza en verde
    this.intervalo = setInterval(() => {
      this.indice = (this.indice + 1) % this.colores.length
      const color = this.colores[this.indice]
      this.emit('cambio', color)
      if (color === 'rojo') this.emit('rojo')
    }, ms)
  }

  parar() {
    clearInterval(this.intervalo)
    this.emit('parado')
  }
}

module.exports = Semaforo
