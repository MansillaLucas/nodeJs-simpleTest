// Streams tienen otra particularidad, que ocurre cuando se intentan mandar archivos al front.
// Para ello creamos un servidor que nos va a servir para mostrar la info dentro del navegador web.
const http = require('http');
const {writeFile} = require('fs/promises')
const {createReadStream} = require('fs')

// Se crea el archivo grande.
const createBigFile = async () => {
    await writeFile('./bigFile.txt', 'Texto para rellenar\n'.repeat(10000))
}
createBigFile()

// Se inicializa el servidor
const server = http.createServer((request, response) => {

    const stream = createReadStream('./bigFile.txt', 'utf-8')

    // La instrucción pipe nos va a permitir enviar constantemente los trozos (chunks) de informacion al front.
    // Esta es una forma útil para redirigir el flujo de información en caso de que necesitemos mostrarla más allá de la consola.
    stream.on('data', (chunk) => {
        stream.pipe(response)
    })

    // Como era de esperarse, existe también un evento error en caso de que algo falle.
    stream.on('error', (error) => {
        console.log("Ocurrió el error: ", error)
    })

})

server.listen(3000)
