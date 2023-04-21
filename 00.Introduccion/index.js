// Este es el indice encargado de ejecutar todos los modulos que van a funcionar bajo NodeJS
// NodeJS es un entorno de ejecución asincrono de Javascript, capaz de correr archivos .js sin la necesidad de un explorador web
// Esto al mismo tiempo hace que muchas de las funcionalidades de los navegadores, no esten disponibles para Node.
// Esto sin embargo no es una desventaja, si tenemos en cuenta los fines para los cuales se puede usar Node. Desde aplicaciones mobiles,
// como también manejar archivos en tu servidor, generar contenido dinamico de paginas y recolectar información de formularios.
// Se comprende en este caso que la falta de ciertas funcionalidades se debe a que tiene un uso más amplio.

// Originalmente, Node había surgido como solucion al problema de tener multiples usuarios conectados a un servidor, ya que una de sus
// funciones principales es distribuir las peticiones sobre los componentes necesarios que resuelvan esta petición. Esto distribuye
// el trabajo sobre los distintos modulos y hace que la respuesta sea más rapida.

// La instruccion global es el elemento global cuando se ejecuta Node, funciona de una forma similar a window en los navegadores.
console.log(global)

// Process permite consultar los aspectos del proceso actual que se está ejecutando.
// En este caso, cada vez que Node ejecuta un archivo creará un nuevo proceso.
console.log(process)