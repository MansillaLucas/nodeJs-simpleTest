// Un modulo particularmente útil es el modulo http que nos permite, entre otras cosas, crear un pequeño servidor.
// Este servidor va a poder recibir peticiones y entregar respuestas mediante el modelo cliente-servidor.
// Para hacerlo funcionar, basta con hacer lo siguiente:
const http = require('http');

http.createServer((request, response) => {

    // Esto permite consultar la url que realiza la petición. Request va a tirar mucha información acerca del cliente que ingresa a
    // nuestro servidor, pero no toda la información va a ser relevante. Por lo pronto podemos hacer lo siguiente:
    console.log(request.url)

    // Como podemos ver, podemos dar varias alternativas dependiendo de las rutas accedidas.
    // Hasta incluso pdoemos construir codigo http para que al entregar la respuesta, este se renderice como cualquier
    // otra pagina http.
    switch (request.url){
        case '/':
            response.write(`
                <h1>Bienvenido al servidor de Node</h1>
                <p>No hay mucho más que ver salvo este mensaje</p>
                `);
            return response.end();
        case '/about':
            response.write('Info importante');
            return response.end();
        default:
            response.write('Hola mundo')
            return response.end();
    }

}).listen(3000);

console.log('Server creado en el puerto 3000');

// Como podemos ver, este archivo se queda ejecutando hasta que terminamos su ejecución. Para ello usamos un puerto exclusivo
// indicando en que donde se va a servir este servicio.

