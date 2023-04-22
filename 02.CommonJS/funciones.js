// Es necesario definir las funciones que van a componer el modulo, nombrarlas y declararlas dentro del apartado de exportación.
// Eso va a permitir que podamos usarlas en otros archivos.

const suma = (n1, n2) => {
return n1+n2;
}

// Module es una variable global para este archivo. Su función, como era de esperarse, expresa la funcionalidad que se va a exportar
module.exports = {
    suma,
}

// Si ejecutamos este archivo, podemos ver justamente las funcionalidades exportadas.
console.log(module)