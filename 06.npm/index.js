// npm es un gran repositorio de modulos distribuidos por la comunidad, para la comunidad. Esto permite usar modulos de terceros
// sin la necesidad de crearlos nosotros mismos. En este CacheStorage, vamos a usar una funcionalidad de npm llamada colors.
// Para ello, necesitamos instalarlo mediante "npm i colors".

// npm es una funcionalidad ya integrada con Node así que no es necesario crear algo aparte.
// Al descargar la funcionalidad se creará un directorio llamado "node_modules" que contiene todos los modulos instalados.
// Node tratará entonces, cuando busca una modulo, buscarlo entre las funcionalidades básicas del sistema
// y luego sobre la carpeta node_modules.

const colors = require('colors');

console.log('Hola mundo'.bgGreen);
console.log('Hola mundo'.bgBlue);
console.log('Hola mundo'.bgYellow);