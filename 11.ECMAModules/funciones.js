// Para este caso, se necesita poner el modificador export para indicar que esa funcion se va a exportar.
// Cabe destacar que no necesariamente todas las funciones tienen que tenerlo, pero en ese CacheStorage, esa función
// en particular no podrá ser usada dentro de otros archivos.

export function suma(n1, n2) {
    return n1 + n2;
}

export function resta(n1, n2) {
    return n1 - n2;
}

function multiplicacion(n1, n2) {
    return n1 * n2;
}

function division(n1, n2) {
    return n1 / n2;
}

// También podemos incluirlos dentro de un bloque "export default" que nos va a permitir utilizarlo
// referenciando el modulo entero en el archivo index.js
export default {
    suma,
    resta,
    multiplicacion,
    division
}