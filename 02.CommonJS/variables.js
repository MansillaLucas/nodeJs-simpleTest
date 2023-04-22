// De la misma FormData, podemos exportar variables y constantes
const valorCadena = 'Esto es una cadena'
const valorNumerico = 35
const valorArreglo = [10, 20, 30]
const valorUsuario = {
    nombre:'Ryan',
    apellido:'Jones'
}

// Para ello, podemos enviarlos como un conjunto de datos como vimos anteriormente con las funciones:
module.exports = {
    expoCadena: valorCadena,
    expoArreglo: valorArreglo,
    expoUsuario: valorUsuario
}

// Esta es otra forma de asignar un valor
module.exports.expoNumerico = valorNumerico;