// De la misma forma que en un navegador web, vamos a tener la posibilidad de captar eventos y reaccionar a ellos.
// Para ello necesitamos importar el siguiente modulo de parte de Node.
const EventEmitter = require('events')
// Aunque parezca que tuvo un nombre asignado al azar, EventEmitter es la convención de nombres para importar este modulo.

const customEmitter = new EventEmitter()

customEmitter.on('nombreEvento', (dato1, dato2) => {
    console.log('Recibido')
    console.log(dato1)
    console.log(dato2)
})

customEmitter.emit('nombreEvento', 'Hello World', [1,2,3,4])