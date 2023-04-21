// Es necesario definir las funciones que van a componer el modulo, nombrarlas y declararlas dentro del apartado de exportación.
// Eso va a permitir que podamos usarlas en otros archivos.

const suma = (n1, n2) => {
return n1+n2;
}

module.exports = {
    suma,
}