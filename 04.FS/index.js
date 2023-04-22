// Importamos el File System
const fs = require('fs');

// readFileSync permite leer un archivo del directorio. Es necesario expresar un formato y convertir el texto dentro del archivo.
// Como se puede ver en el segundo archivo importado, no se especifica una codificación, pero es necesario codificarlo al momento de usarlo.
const codificado1 = fs.readFileSync('./file1.txt', 'utf-8');
const sinCodificar2 = fs.readFileSync('./file2.txt');

console.log(codificado1);
console.log(sinCodificar2.toString());

// Se puede también crear archivos especificando una ruta y el contenido del mismo.
fs.writeFileSync('./file3.txt','Este archivo fue creado desde cero.');

const contenido = 'Contenido nuevo';
// Se puede crear a partir de una variable también.
fs.writeFileSync('./file4.txt',contenido);

// Algo a tener en cuenta es que writeFile sobrescribe el contenido del archivo al cual apunta,
// a menos que se ejecute con el flag a (append)
fs.writeFileSync('./file4.txt','Nueva linea\n',{
    flag:'a'
});

// Otra cosa a tener en cuenta es que cuando los metodos read y write no estan especificados con sync al final, se consideran
// metodos asincronos. Los metodos asincronos permiten ejecutar una tarea y devolver el resultado una vez que hayan terminado
// sin la necesidad de ocupar el uso del cpu en esperar a que termine(tiempo muerto).
// Para ello, podemos hacer lo siguiente:
fs.readFile('./file1.txt', 'utf-8', (error, data) => {
    if(error){
        console.log(error);
    }
    else{
        fs.writeFile('./archivoNuevoAsync.txt', 'Este archivo fue creado a partir de promesas', (error, data) => {
            if(error){
                console.log(error);
            }
            else{
                console.log('El archivo fue creado con exito.');
            }
        })
    }
})

// Algo a notar es que existen formas más elegante de escribir funciones con promesas. La forma anterior no es apropiada
// y tiene un nombre: callback hell. Esto se llama así cuando varias funciones se llaman recurrentemente mediante llaves
// creando una estructura dificil de comprender.