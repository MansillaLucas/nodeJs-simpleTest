// Streams es una forma de obtener información de forma fragmentada, con el objetivo de consumir recursos bajo demanda.
// En este createReadStream, se van a realizar lecturas constantes de un documento a medida que el mismo se vaya leyendo.
const {writeFile} = require('fs/promises')
const {createReadStream} = require('fs')

// Se crea el archivo grande.
const createBigFile = async () => {
    await writeFile('./bigFile.txt', 'Texto para rellenar\n'.repeat(10000))
}

createBigFile()

// El metodo createReadStream nos devuelve un stream conteniendo toda la información para su lectura.
// Al igual que un emitidor de eventos, Stream tiene un par de eventos propios de su clase que se pueden disparar si los
// definimos.
const stream = createReadStream('./bigFile.txt', 'utf-8')

// Realiza una tarea al leer un trozo de información
stream.on('data', (chunk) => {
    console.log(chunk)
})

// Realiza una tarea al finalizar de leer el archivo completo.
stream.on('end',() => {
    console.log("La lectura finalizó")
})