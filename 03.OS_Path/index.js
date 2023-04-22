// Node JS, a diferencia de Javascript en web, tiene la capacidad de acceder a la información del sistema operativo donde funciona.
// Hay un repertorio de apis que Node puede ejecutar, estas mismas pueden consultarse en la documentación.
// Algunos ejemplo son:

const os = require('os');

// Muestra la información del usuario
console.log(os.userInfo());

// Muestra la cantidad de tiempo transcurrido desde que el programa se ejecutó
console.log(os.uptime());

// Detalla la plataforma en la cuál se está ejecutando Node.
console.log(os.platform());

// Ver la memoria total del equipo
console.log(os.totalmem());

// Ver la memoria disponible del equipo
console.log(os.freemem());

// Una forma efectiva de organizar la información es mediante el uso de tables:
console.table({
    os: os.platform(),
    version:os.release(),
    totalMemory:os.totalmem()
})

// Path también es una opción que se puede importar para que los archivos puedan usar.
// Path sirve para revisar y detallar la ruta de distintos ficheros.
const path = require('path');

// Mostramos toda la info relacionada a rutas
console.log(path);

// Nos permite ver el separados usado por este SO
console.log(path.sep());

// Esta función join es particularmente util para armar una ruta sin la necesidad de preocuparnos por la ausencia o el tipo de separador
const filePath = path.join('/public', 'dist', '\\styles', 'main.css');

console.log(filePath);

// Devuelve el nombre del archivo que especifica la ruta.
console.log(path.basename(filePath));

// Devuelve solo la ruta del archivo, sin especificar el archivo
console.log(path.dirname(filePath));

// Devuelve la ruta como un objeto para mejor lectura
console.log(path.parse(filePath));

// Resuelve la ruta en la cual esta carpeta se encuentra
console.log(path.resolve('dist'));