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

// Al ejecutar el comando npm init vamos a poder inicializar o configurar un paquete existente en nuestro directorio.
// Esto es particularmente útil para crear modulos y poder subirlos eventualmente a npm en caso de que queramos.
// Además, tenemos opciones extras como ejecutar lineas de comando bajo un alias mediante el apartado scripts

// Otra opción muy útil es especificar dependencias exclusivas para desarrollo mediante la opción -D.
// Por ejemplo "npm i nodemon -D"
// Otra opción es mediante el parámetro -g, para descargarlo de forma global y poder usarlo en los siguientes proyectos.
// Por ejemplo "npm i nodemon -g"

// Existe una herramienta como npm, solo que en vez de instalar herramientas como módulos los hace como CLI(Common Line Interface).
// Esta herramienta se llama npx y te permite ejecutar un paquete sin la necesidad de tenerlo instalado en tu maquina.
// De la misma forma que al instalar cualquier otro paquete, al usar npx el resultado de esa funcionalidad va a ser
// ejecutada inmediatamente