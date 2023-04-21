// Debido a que la funcionalidad principal de NodeJs se realiza mediante nodos, era de esperarse que podamos nosotros mismos los importemos
// y podamos usarlos a nuestro gusto. Para eso, necesitamos require, que se encarga de importar los comportamientos de otros archivos.
const  { suma } = require('./funciones');

// ...para que luego podamos usarlos dentro de otro archivo.
// Las funciones que se necesiten exportar a este archivo, necesitan declarar que estas funciones van a ser exportadas
// dentro de su mismo archivo.
console.log("El resultado de 2 más 3 es :", suma(2,3));