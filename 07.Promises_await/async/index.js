// En muchas ocasiones vamos a ver cómo tenemos una serie de condicionales anidados a partir de una serie de funciones que llaman
// a otras. Como dijimos anteriormente, esto es lo que se conoce como Callback Hell. En versiones actuales de Javascript esto es
// completamente evitable mediante las promesas, una forma más elegante de escribir código cuyo resultado depende de otro resultado.

// Para ello, hacemos lo siguiente:
const {readFile} = require('fs')
const {promisify} = require('util')

const getText = (pathfile) => {
    return new Promise(function(resolve, reject){
        readFile(pathfile, 'utf-8', (err, data) => {
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })
}

getText('./file1.txt')
.then((result) => console.log(result))
.then(() => getText('./file2.txt'))
.then(result => console.log(result))
.catch(error => console.log(error))

// En este caso podemos ver como la segunda parte es mucho más legible que lo que teníamos anteriormente con las llamadas recurrentes.
// Solo tuvimos que definir una promesa, junto con su resolución y su rechazo, y a partir de eso plantear los casos de las tareas
// que va a realizar en cada uno.

// Alternativamente podemos escribir el mismo tipo de código de una forma aún más cómoda mediante await y async.
// Al igual que en excepciones tenemos bloques try catch para capturar errores en caso de que ocurran, es decir, la condición
// de rechazo.
async function read(){
    try{
        const result = await getText('./file1.txt')
        console.log(result)
        const result2 = await getText('./file2.txt')
        console.log(result2)
    }
    catch(error){
        console.log(error)
    }
}

// Alternativamente podemos usar un módulo integrado ya en Node llamado Promisify, que nos permite realizar promesas sin definirlas
// nosotros mismos.

const readFilePromise = promisify(readFile)

async function read(){
    try{
        const result = await getText('./file1.txt', 'utf-8')
        console.log(result)
        const result2 = await getText('./file2.txt', 'utf-8')
        console.log(result2)
    }
    catch(error){
        console.log(error)
    }
}

// Podemos optimizar aún más el código importando require('fs/promises'), y de ahí realizar los mismos metodos sin la necesidad
// de convertirlos en promesas manualmente.