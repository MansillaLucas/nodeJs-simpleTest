
// index.js es el indice encargado de ejecutar todos los modulos que van a funcionar bajo NodeJS

// La instruccion global es el elemento global cuando se ejecuta Node, funciona de una forma similar a window en los navegadores.
console.log(global)

// Existen más variables globales propias de Node como por ejemplo:
console.log(module)
console.log(require)
console.log(__dirname)
console.log(__filename)

// Process permite consultar los aspectos del proceso actual que se está ejecutando.
// En este caso, cada vez que Node ejecuta un archivo creará un nuevo proceso.
console.log(process)